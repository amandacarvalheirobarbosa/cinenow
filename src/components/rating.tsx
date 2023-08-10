export default function Rating({voteAverage, id}: {voteAverage: number, id:number }) {
  const vote = voteAverage*10;
  return(
    <div className="pb-3 px-3 justify-start">
      <div className="radial-progress text-secondary" 
        style={{"--value":vote, "--size": "3rem", "--thickness": "2px"} as any}>{voteAverage}</div>
    </div>    
  );
}