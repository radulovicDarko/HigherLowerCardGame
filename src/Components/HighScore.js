const HighScore = ( {highScore} ) => {
    return (
        <div className='text-center text-white'>
            <p className='display-4' style={{ transform: 'rotate(-5deg)', fontWeight: 'bold' }}>Can you <br /> beat the </p>
            <p className='display-4' style={{ fontWeight: 'bold' }} >{highScore}</p>
            <p className='display-4'  style={{ transform: 'rotate(5deg)', fontWeight: 'bold' }}>high score?</p>
        </div>
    )
}

export default HighScore