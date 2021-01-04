import Chart from "react-google-charts"

const ChartPage = ({dates}) => {

    if (!dates) return null;

    const colourDaysPerMonth = ((dates, colour) => {

    

    const colourDays = dates.filter((date) => {
        return date.celebrations.some((celebration) => {
            return celebration.colour === (colour)
        })
    })

    const colourFeasts = colourDays.map((date) => {
        let celebrationsList = date.celebrations.filter((celebration) => {
            return celebration.colour === (colour)
        })
        return celebrationsList
    })

    return colourFeasts.length ;

    })

    console.log(colourDaysPerMonth(dates, "red"))
    console.log(colourDaysPerMonth(dates, "green"))
    console.log(colourDaysPerMonth(dates, "white"))
    console.log(colourDaysPerMonth(dates, "violet"))

    return (
        <div id="chart">
            <Chart
  width={'500px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Colour', 'Feast Days'],
    ['Green', 11],
    ['White', 2],
    ['Red', 2],
    ['Violet', 2],
    
  ]}
  options={{
    title: 'Feast Day Colours',
    backgroundColor: 'Black',
    color: 'White',
    legend: {textStyle: {color: "white"}},
    titleTextStyle: {color: "white"},
    colors: ['green', 'white', 'red', 'violet']
  }}
  rootProps={{ 'data-testid': '1' }}
/>
        </div>
    )
}

export default ChartPage;