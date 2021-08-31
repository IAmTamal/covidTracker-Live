import React, { useEffect, useState } from "react";
import "./Covid.css";

const Covid = () => {

    const [data, setdata] = useState([]);

    const getcovidData = async () => {
        try {
            const res = await fetch("https://data.covid19india.org/v4/min/data.min.json");
            const actualData = await res.json();
            console.log(actualData.WB.total);
            setdata(actualData.WB.total)
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getcovidData();
    }, []);

    return (


        <div className="container-fluid">

            <div className="headings">
                <h6>🔴Live</h6>
                <h2>Covid-19 Tracker</h2>
            </div>


            <div className="allcards">
                <div class="card c1">
                    <div className="box ">
                        <p className="card__name">
                            <span>OUR</span> STATE
                        </p>
                        <p className="card__total card__small">WEST BENGAL</p>
                    </div>
                </div>

                <div class="card c1">
                    <div className="box ">
                        <p className="card__name">
                            <span>TOTAL</span> TESTED
                        </p>
                        <p className="card__total card__small">{data.tested}</p>
                    </div>
                </div>

                <div class="card c1">
                    <div className="box ">
                        <p className="card__name">
                            <span>TOTAL</span> CONFIRMED
                        </p>
                        <p className="card__total card__small">{data.confirmed} </p>
                    </div>
                </div>

                <div class="card c1">
                    <div className="box ">
                        <p className="card__name">
                            <span>TOTAL</span> RECOVERED
                        </p>
                        <p className="card__total card__small">{data.recovered}</p>
                    </div>
                </div>

                <div class="card c1">
                    <div className="box ">
                        <p className="card__name">
                            <span>TOTAL</span> DEATH
                        </p>
                        <p className="card__total card__small">{data.deceased} </p>
                    </div>
                </div>

                <div class="card c1">
                    <div className="box ">
                        <p className="card__name">
                            <span>TOTAL</span> VACCINATED
                        </p>
                        <p className="card__total card__small">{data.vaccinated2}</p>
                    </div>
                </div>

            </div>




        </div>
    );
};

export default Covid;
