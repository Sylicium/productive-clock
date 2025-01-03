export default `<html>

    <head>

        <title>Productive Clock</title>
        <meta charset="utf-8">
        <meta property="og:title" content="Productive Clock - 32h format">
        <meta property="og:description" content="A 32 hours based clock to make your day more productive.">
        <!-- <meta property="og:image" content="/assets/icon.png"> -->
        <!-- <meta name="twitter:card" content="summary_large_image"> -->
        <meta name="theme-color" content="#d74d4d">

    <style>

        body {
            background-color: #398573;
        }


        div.discord {
            text-align: center;
            width: 100%;
            margin-top: 10vh;
        }
        div.discord a.link {
            font-size: 50px;
            text-align: center;
        }

        div.main {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
        }

        div.main div.before_what {
            text-align: center;
            font-family: consolas;
            color: #EEEE00;
            font-size: 30px;
            margin-top: 20vh;
            margin-top: 30vh;
        }

        div.main div.submain div {
            display: inline-block;
            margin: 10px auto;
        }
        div.submain {
            margin: 0px auto;
            text-align: center;
            width: 100%;
        }
        div.main div.display_box{
            background-color: #36393F;
            color: whitesmoke;
            padding: 5px;
            border-radius: 10px;
            width: 150px;
            height: 100px;
            text-align: center;
            vertical-align: middle;
        }
        div.main div.display_box h1.count {
            margin: 0px;
            font-size: 80px;
            font-family: consolas;
        }
        div.main div.display_box h1.name {
            font-family: consolas;
        }

        div.main div.discord_widget {
            margin: 0px auto;
            margin-top: 60px;
            /*padding: 25px;*/
            max-width: 700px;
            background-color: #2F3136;
            border-radius: 15px;
            display: flex;
            font-family: consolas;
            color: whitesmoke;
        }
        div.main div.discord_widget div.box {
            margin: 0px;
        }
        div.main div.discord_widget div.box_left {
            /*width: 15%;*/
            min-width: 60px;
            padding: 25px;
        }
        div.main div.discord_widget div.box_center {
            width: 50%;
            padding: 15px;
        }
        div.main div.discord_widget div.box_center h1{
            margin-bottom: 10px;
        }
        div.main div.discord_widget div.box_right {
            width: 30%;
            padding: 25px;
        }
        div.main div.discord_widget div.text {
            display: block;
            margin: 0px auto;
        }
        div.main div.discord_widget div.text * {
            margin: 0px;
        }
        div.main div.discord_widget div.box div.button {
            background-color: #3BA55D;
            border-radius: 5px;
            margin-top: 0px;
            padding: 15px;
            text-align: center;
            transition: 0.3s all;
        }
        div.main div.discord_widget div.box div.button:hover {
            background-color: #2D7D46;
            transition: 0.3s all;
        }
        div.main div.discord_widget div.box div.disabled {
            cursor: wait;
        }
        div.main div.discord_widget div.box div.enabled {
            cursor: pointer;
        }
        div.main div.discord_widget div.box div.button a#guild_invite{
            color: whitesmoke;
            text-decoration: none;
            font-size: 23px;
        }

        .noselect {
            -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Safari */
            -khtml-user-select: none; /* Konqueror HTML */
            -moz-user-select: none; /* Old versions of Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
        }


    </style>

    </head>

<body>


<div class="main">


    <div class="submain">
        <!--<div class="days display_box">
            <h1 class="days_count count">...</h1>
            <h1 class="name">Jours</h1>
        </div>-->
        <div class="hours display_box">
            <h1 class="hours_count count">...</h1>
            <h1 class="name">Heures</h1>
        </div>
        <div class="minutes display_box">
            <h1 class="minutes_count count">...</h1>
            <h1 class="name">Minutes</h1>
        </div>
        <div class="seconds display_box">
            <h1 class="seconds_count count">...</h1>
            <h1 class="name">Secondes</h1>
        </div>
    </div>

</div>

</body>

<script>

    setInterval(() => {
        refreshClock()
    }, 100)


    async function refreshClock() {

        let getTime = fetch('/clock/json')
        /*
        {
            years: this.getYears(),
            months: this.getMonths(),
            weeks: this.getWeeks(),
            days: this.getDays(),
            hours: this.getHours(),
            minutes: this.getMinutes(),
            seconds: this.getSeconds(),
            text: {
                time: this.toTimeString(),
                date: this.toLocaleString()
            }
        }
        */
    
        let data = await getTime.then(res => res.json())
        console.log("data", data)

        document.querySelector('.hours_count').innerText = data.hours
        document.querySelector('.minutes_count').innerText = data.minutes
        document.querySelector('.seconds_count').innerText = data.seconds

    }

</script>

</html>
`;