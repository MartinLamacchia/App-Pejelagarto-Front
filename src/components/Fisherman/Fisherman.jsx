import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Fisherman.module.css";
import Fish from "../Fish/Fish";
import { getAllFishForUser } from "../../store/features/catchFish/getAllFishForUser";

const Fisherman = () => {
  const { user } = useSelector((state) => state.login);
  const { allFish } = useSelector((state) => state.getAllFishForUser);
  const dispatch = useDispatch()


  const fetchAllFish = async () => {
    await dispatch(getAllFishForUser(user._id))
  }

  useEffect(() => {
    fetchAllFish()
  }, [dispatch, user._id])

  console.log(allFish);
  

  return (
    <div className={styles.container}>
      <h2>
        {user?.name} {user?.lastname}
      </h2>
      {allFish?.length !== 0 ? (
        allFish?.map((fish, index) => <Fish species={fish.species} weight={fish.weight} length={fish.length} nameFiscal={fish.fiscal.name} lastnameFiscal={fish.fiscal.lastname}/>)
      ) : (
        <h3 className={styles.message}>No ha atrapado ningun pez</h3>
      )}
    </div>
  );
};

export default Fisherman;
