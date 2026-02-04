let Player=(props)=>{

    let{points}=props;
    return(
        <div className="player-info">
            <h2>Player info</h2>
            <p><strong>Points:<span id="playerPoints"> {points}</span></strong></p>
            



        </div>
    )
}

export default Player