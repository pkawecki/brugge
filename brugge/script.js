const wsd = document.querySelector("#WP-Stad-Default");
console.log("wsd", wsd);
const { useState } = React;
const lang = document.documentElement.lang;
const tiles = {
    nl: {
        Meldingen: {
            "acties": "#",
            "goed te keuren": "#"
        },
        Opleiding: {
            Startpagina: "#"
        }
    },
    en: {
        Meldingen: {
            "actions": "#",
            "goed te keuren": "#"
        },
        Opleiding: {
            Startpagina: "#"
        }
    }
}



const getSubtitles = (title) => {
    // console.log("Title", title);
    switch (lang) {
        case "nl":
            // console.log("nl");
            let subtitles = Object.keys(tiles[lang][title]);
            console.log(subtitles);
            return subtitles;
            break;
        case "en":
            subtitles = Object.keys(tiles.en[title]);
            console.log(subtitles);
            return subtitles;
            break;
    }
}

// const keys = Object.keys(Meldingen_links);
// console.log(keys);
// console.log(Meldingen_links[keys[0]]);


function Block({ title, icon_name, subtitles }) {
    const [active, setActive] = useState(false);
    console.log("active", active);

    return <div className="container">
        <div className="innerContainer">
            <div onTouchStart={() => { setActive(!active) }}>
                <div className={`itemMob dropdown ${active ? "active" : ""}`}>
                    <span className="notificationDot" ></span>
                    <i className={icon_name}></i>
                    <h3>{title}</h3>
                    <ul className="dropdown-menu notifications">
                        {subtitles.map(subtitle => (
                            <li key={subtitle} id={subtitle}>
                                <a href="#" >
                                    <span className="subNotificationDot">0</span>
                                    <span className="subNotificationText">{subtitle}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
}

function MyApp() {
    return (
        <Block title={"Meldingen"} icon_name={"far fa-bell"} subtitles={getSubtitles("Meldingen")} />

    );
}



const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);