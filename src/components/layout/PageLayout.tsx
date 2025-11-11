import { PageBlocks } from "../../data/constants/PageBlocks";


export const PageLayout = () => {


    return (
      <>
        {PageBlocks.map((el) => (
          <div className="min-h-screen overflow-x-hidden w-screen  outline-b ">{el}</div>
        ))}
      </>
    );
}