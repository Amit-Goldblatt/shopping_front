import bird2 from '../assets/bird2.png';
function About() {
    return (
        <div className="about">
            <h1>About</h1>
            <h2>this site was built as a class project by Amit Goldblatt.</h2>
            <h2>the source code is available at
                <a href="https://github.com/Amit-Goldblatt/shopping_front"> shopping_front </a>and at<a href="https://github.com/Amit-Goldblatt/shopping_back"> shopping back.</a>
            </h2>
            <h2>contact me at:</h2>
            <h2>amit@Goldblatt.in</h2>
            <img src={bird2} alt="bird"/>
        </div>

    )
}

export default About