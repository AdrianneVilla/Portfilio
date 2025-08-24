export default function BorderButtons ({buttonsName}){
  return (
    <>
    <button className="border-yellow-500  border-2 pl-4 pr-4 pt-3 pb-3 text-yellow-500 rounded-sm uppercase font-bold hover:text-stone-900 hover:bg-yellow-500 ">
      {buttonsName}
    </button>
    </>
  );
}