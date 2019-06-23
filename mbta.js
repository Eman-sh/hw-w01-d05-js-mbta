let stopsBetweenStations = function (start_Line, start_Station, end_Line, end_Station) {
    let lines = {
        red: [
            "South Station",
            "Park Street",
            "Kendall",
            "Central",
            "Harvard",
            "Porter",
            "Davis",
            "Alewife",
        ],
        green: [
            "Government Center",
            "Park Street",
            "Boylston",
            "Arlington",
            "Copley",
            "Hynes",
            "Kenmore",
        ],
        orange: [
            "North Station",
            "Haymarket",
            "Park Street",
            "State",
            "Downtown Crossing",
            "Chinatown",
            "Back Bay",
            "Forest Hills",
        ],
    }


    let startStation = lines[start_Line].indexOf(start_Station);
    let endStation = lines[end_Line].indexOf(end_Station);

    if (start_Line === end_Line) {
        return ((startStation + 1) - (endStation + 1));
    }
    else {
        let toPS = lines[start_Line].indexOf("Park Street")
        toPS = ((startStation + 1) - (toPS + 1));
        let fromPS = lines[end_Line].indexOf("Park Street")
        fromPS = ((fromPS + 1) - (endStation + 1));
        distination = toPS + fromPS
        return distination
    }

};
