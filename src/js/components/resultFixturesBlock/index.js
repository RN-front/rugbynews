import React from "react";
import {Link} from "react-router-dom";

class ResultFixturesBlock extends React.Component {

    showResult() {
        document.querySelector('.result-fixtures-block__title-result').classList.add('active');
        document.querySelector('.result-fixtures-block__table__result').classList.add('active');
        document.querySelector('.result-fixtures-block__title-fixtures').classList.remove('active');
        document.querySelector('.result-fixtures-block__table__fixtures').classList.remove('active');
    }

    showFixtures() {
        document.querySelector('.result-fixtures-block__title-fixtures').classList.add('active');
        document.querySelector('.result-fixtures-block__table__fixtures').classList.add('active');
        document.querySelector('.result-fixtures-block__title-result').classList.remove('active');
        document.querySelector('.result-fixtures-block__table__result').classList.remove('active');
    }

    render() {
        return (
            <div>
                <div className="result-fixtures-block">
                    <div className="result-fixtures-block__title">
                        <div className="result-fixtures-block__title-result active" onClick={this.showResult}>
                            <p>RESULT</p>
                        </div>
                        <div className="result-fixtures-block__title-fixtures" onClick={this.showFixtures}>
                            <p>fixtures</p>
                        </div>
                    </div>
                    <div className="result-fixtures-block__table__result active">
                        <div className="result-fixtures-block__table-result">
                            <div className="result-fixtures-block__table-result-info">
                                <p>
                                    SIX NATIONS
                                    FRI, FEB 2
                                </p>
                                <p>
                                    18:00(GMT)
                                    20:00(Kiyv)
                                </p>
                            </div>
                            <div className="result-fixtures-block__table-result-score">
                                <div className="result-fixtures-block__command">
                                    <div>
                                        <img src="img/National_Rugby_League.png" alt="club logo"/>
                                    </div>
                                    <p>NEW ZELAND</p>
                                    <p>25</p>
                                </div>
                                <div className="result-fixtures-block__command">
                                    <div>
                                        <img src="img/National_Rugby_League1.png" alt="club logo"/>
                                    </div>
                                    <p>WALES</p>
                                    <p>15</p>
                                </div>
                            </div>
                        </div>
                        <div className="result-fixtures-block__table-result">
                            <div className="result-fixtures-block__table-result-info">
                                <p>
                                    SIX NATIONS
                                    FRI, FEB 2
                                </p>
                                <p>
                                    18:00(GMT)
                                    20:00(Kiyv)
                                </p>
                            </div>
                            <div className="result-fixtures-block__table-result-score">
                                <div className="result-fixtures-block__command">
                                    <div>
                                        <img src="img/National_Rugby_League.png" alt="club logo"/>
                                    </div>
                                    <p>NEW ZELAND</p>
                                    <p>25</p>
                                </div>
                                <div className="result-fixtures-block__command">
                                    <div>
                                        <img src="img/National_Rugby_League1.png" alt="club logo"/>
                                    </div>
                                    <p>WALES</p>
                                    <p>15</p>
                                </div>
                            </div>
                        </div>
                        <div className="result-fixtures-block__table-result">
                            <div className="result-fixtures-block__table-result-info">
                                <p>
                                    SIX NATIONS
                                    FRI, FEB 2
                                </p>
                                <p>
                                    18:00(GMT)
                                    20:00(Kiyv)
                                </p>
                            </div>
                            <div className="result-fixtures-block__table-result-score">
                                <div className="result-fixtures-block__command">
                                    <div>
                                        <img src="img/National_Rugby_League.png" alt="club logo"/>
                                    </div>
                                    <p>NEW ZELAND</p>
                                    <p>25</p>
                                </div>
                                <div className="result-fixtures-block__command">
                                    <div>
                                        <img src="img/National_Rugby_League1.png" alt="club logo"/>
                                    </div>
                                    <p>WALES</p>
                                    <p>15</p>
                                </div>
                            </div>
                        </div>
                        <div className="result-fixtures-block__table-result">
                            <div className="result-fixtures-block__table-result-info">
                                <p>
                                    SIX NATIONS
                                    FRI, FEB 2
                                </p>
                                <p>
                                    18:00(GMT)
                                    20:00(Kiyv)
                                </p>
                            </div>
                            <div className="result-fixtures-block__table-result-score">
                                <div className="result-fixtures-block__command">
                                    <div>
                                        <img src="img/National_Rugby_League.png" alt="club logo"/>
                                    </div>
                                    <p>NEW ZELAND</p>
                                    <p>25</p>
                                </div>
                                <div className="result-fixtures-block__command">
                                    <div>
                                        <img src="img/National_Rugby_League1.png" alt="club logo"/>
                                    </div>
                                    <p>WALES</p>
                                    <p>15</p>
                                </div>
                            </div>
                        </div>
                        <div className="result-fixtures-block__table-result">
                            <div className="result-fixtures-block__table-result-info">
                                <p>
                                    SIX NATIONS
                                    FRI, FEB 2
                                </p>
                                <p>
                                    18:00(GMT)
                                    20:00(Kiyv)
                                </p>
                            </div>
                            <div className="result-fixtures-block__table-result-score">
                                <div className="result-fixtures-block__command">
                                    <div>
                                        <img src="img/National_Rugby_League.png" alt="club logo"/>
                                    </div>
                                    <p>NEW ZELAND</p>
                                    <p>25</p>
                                </div>
                                <div className="result-fixtures-block__command">
                                    <div>
                                        <img src="img/National_Rugby_League1.png" alt="club logo"/>
                                    </div>
                                    <p>WALES</p>
                                    <p>15</p>
                                </div>
                            </div>
                        </div>
                        <div className="result-fixtures-block__table-result">
                            <div className="result-fixtures-block__table-result-info">
                                <p>
                                    SIX NATIONS
                                    FRI, FEB 2
                                </p>
                                <p>
                                    18:00(GMT)
                                    20:00(Kiyv)
                                </p>
                            </div>
                            <div className="result-fixtures-block__table-result-score">
                                <div className="result-fixtures-block__command">
                                    <div>
                                        <img src="img/National_Rugby_League.png" alt="club logo"/>
                                    </div>
                                    <p>NEW ZELAND</p>
                                    <p>25</p>
                                </div>
                                <div className="result-fixtures-block__command">
                                    <div>
                                        <img src="img/National_Rugby_League1.png" alt="club logo"/>
                                    </div>
                                    <p>WALES</p>
                                    <p>15</p>
                                </div>
                            </div>
                        </div>
                        <Link to='/' className="result-fixtures-block__table-link">All Result <span> &rarr;</span></Link>
                    </div>

                    <div className="result-fixtures-block__table__result result-fixtures-block__table__fixtures">
                        <div className="result-fixtures-block__table-result">
                            <div className="result-fixtures-block__table-result-info">
                                <p>
                                    SIX NATIONS
                                    FRI, FEB 2
                                </p>
                                <p>
                                    18:00(GMT)
                                    20:00(Kiyv)
                                </p>
                            </div>
                            <div className="result-fixtures-block__table-result-score">
                                <div className="result-fixtures-block__command">
                                    <div>
                                        <img src="img/National_Rugby_League.png" alt="club logo"/>
                                    </div>
                                    <p>NEW ZELAND</p>
                                </div>
                                <div className="result-fixtures-block__command">
                                    <div>
                                        <img src="img/National_Rugby_League1.png" alt="club logo"/>
                                    </div>
                                    <p>WALES</p>
                                </div>
                            </div>
                        </div>
                        <div className="result-fixtures-block__table-result">
                            <div className="result-fixtures-block__table-result-info">
                                <p>
                                    SIX NATIONS
                                    FRI, FEB 2
                                </p>
                                <p>
                                    18:00(GMT)
                                    20:00(Kiyv)
                                </p>
                            </div>
                            <div className="result-fixtures-block__table-result-score">
                                <div className="result-fixtures-block__command">
                                    <div>
                                        <img src="img/National_Rugby_League.png" alt="club logo"/>
                                    </div>
                                    <p>NEW ZELAND</p>
                                </div>
                                <div className="result-fixtures-block__command">
                                    <div>
                                        <img src="img/National_Rugby_League1.png" alt="club logo"/>
                                    </div>
                                    <p>WALES</p>
                                </div>
                            </div>
                        </div>
                        <div className="result-fixtures-block__table-result">
                            <div className="result-fixtures-block__table-result-info">
                                <p>
                                    SIX NATIONS
                                    FRI, FEB 2
                                </p>
                                <p>
                                    18:00(GMT)
                                    20:00(Kiyv)
                                </p>
                            </div>
                            <div className="result-fixtures-block__table-result-score">
                                <div className="result-fixtures-block__command">
                                    <div>
                                        <img src="img/National_Rugby_League.png" alt="club logo"/>
                                    </div>
                                    <p>NEW ZELAND</p>
                                </div>
                                <div className="result-fixtures-block__command">
                                    <div>
                                        <img src="img/National_Rugby_League1.png" alt="club logo"/>
                                    </div>
                                    <p>WALES</p>
                                </div>
                            </div>
                        </div>
                        <div className="result-fixtures-block__table-result">
                            <div className="result-fixtures-block__table-result-info">
                                <p>
                                    SIX NATIONS
                                    FRI, FEB 2
                                </p>
                                <p>
                                    18:00(GMT)
                                    20:00(Kiyv)
                                </p>
                            </div>
                            <div className="result-fixtures-block__table-result-score">
                                <div className="result-fixtures-block__command">
                                    <div>
                                        <img src="img/National_Rugby_League.png" alt="club logo"/>
                                    </div>
                                    <p>NEW ZELAND</p>
                                </div>
                                <div className="result-fixtures-block__command">
                                    <div>
                                        <img src="img/National_Rugby_League1.png" alt="club logo"/>
                                    </div>
                                    <p>WALES</p>
                                </div>
                            </div>
                        </div>
                        <div className="result-fixtures-block__table-result">
                            <div className="result-fixtures-block__table-result-info">
                                <p>
                                    SIX NATIONS
                                    FRI, FEB 2
                                </p>
                                <p>
                                    18:00(GMT)
                                    20:00(Kiyv)
                                </p>
                            </div>
                            <div className="result-fixtures-block__table-result-score">
                                <div className="result-fixtures-block__command">
                                    <div>
                                        <img src="img/National_Rugby_League.png" alt="club logo"/>
                                    </div>
                                    <p>NEW ZELAND</p>
                                </div>
                                <div className="result-fixtures-block__command">
                                    <div>
                                        <img src="img/National_Rugby_League1.png" alt="club logo"/>
                                    </div>
                                    <p>WALES</p>
                                </div>
                            </div>
                        </div>
                        <div className="result-fixtures-block__table-result">
                            <div className="result-fixtures-block__table-result-info">
                                <p>
                                    SIX NATIONS
                                    FRI, FEB 2
                                </p>
                                <p>
                                    18:00(GMT)
                                    20:00(Kiyv)
                                </p>
                            </div>
                            <div className="result-fixtures-block__table-result-score">
                                <div className="result-fixtures-block__command">
                                    <div>
                                        <img src="img/National_Rugby_League.png" alt="club logo"/>
                                    </div>
                                    <p>NEW ZELAND</p>
                                </div>
                                <div className="result-fixtures-block__command">
                                    <div>
                                        <img src="img/National_Rugby_League1.png" alt="club logo"/>
                                    </div>
                                    <p>WALES</p>
                                </div>
                            </div>
                        </div>
                        <Link to='/' className="result-fixtures-block__table-link">All Result <span> &rarr;</span></Link>
                    </div>

                </div>
            </div>
        )
    }
};


export default ResultFixturesBlock;