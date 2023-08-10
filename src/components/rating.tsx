export default function Rating({voteAverage, id}: {voteAverage: number, id:number }) {
  const vote = voteAverage*10;
  return(
    <div className="pb-3 px-3 justify-start">
      <div className="radial-progress text-secondary" style={{"--value":vote, "--size": "3rem", "--thickness": "2px"} as any}>{voteAverage}</div>
      {/* <div key={id} className="rating rating-sm rating-half">
        <input type="radio" name={id.toString()} className="rating-hidden" />
        <input type="radio" name={id.toString()} className="bg-green-500 mask mask-star-2 mask-half-1" />
        <input type="radio" name={id.toString()} className="bg-green-500 mask mask-star-2 mask-half-2" />
        <input type="radio" name={id.toString()} className="bg-green-500 mask mask-star-2 mask-half-1" />
        <input type="radio" name={id.toString()} className="bg-green-500 mask mask-star-2 mask-half-2" />
        <input type="radio" name={id.toString()} className="bg-green-500 mask mask-star-2 mask-half-1" />
        <input type="radio" name={id.toString()} className="bg-green-500 mask mask-star-2 mask-half-2" />
        <input type="radio" name={id.toString()} className="bg-green-500 mask mask-star-2 mask-half-1" />
        <input type="radio" name={id.toString()} className="bg-green-500 mask mask-star-2 mask-half-2" />
        <input type="radio" name={id.toString()} className="bg-green-500 mask mask-star-2 mask-half-1" />
        <input type="radio" name={id.toString()} className="bg-green-500 mask mask-star-2 mask-half-2" />
      </div> */}
    </div>    
  );
}