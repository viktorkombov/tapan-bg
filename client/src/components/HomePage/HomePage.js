import NewsGrid from '../NewsGrid';
import OtherNews from '../OtherNews';
import InterestingFacts from '../InterestingFacts';

const HomePage = () => {

    return (
        <>
            <h2 className="headlinesHeading">Водещите новини за днес</h2>
            <NewsGrid />
            <OtherNews />
            <InterestingFacts />
        </>
    );
}

export default HomePage;