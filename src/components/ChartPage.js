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

    const redFeasts = colourDaysPerMonth(dates, "red")
    const greenFeasts = colourDaysPerMonth(dates, "green")
    const whiteFeasts = colourDaysPerMonth(dates, "white")
    const violetFeasts = colourDaysPerMonth(dates, "violet")

    return (
        <div id="chart">
            <Chart
  width={'500px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Colour', 'Feast Days'],
    ['Green – ' + greenFeasts , greenFeasts],
    ['White – ' + whiteFeasts , whiteFeasts],
    ['Red – ' + redFeasts , redFeasts],
    ['Violet – ' + violetFeasts , violetFeasts],
    
  ]}
  options={{
    title: 'Feast Day Colours for Month',
    backgroundColor: 'Black',
    color: 'White',
    legend: {textStyle: {color: "white"}},
    titleTextStyle: {color: "white"},
    colors: ['green', 'white', 'red', 'violet'],
    pieSliceTextStyle: {color: "black"}
  }}
  rootProps={{ 'data-testid': '1' }}
/>
        </div>
    )
}

export default ChartPage;