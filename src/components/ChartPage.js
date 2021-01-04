import Chart from "react-google-charts"

const ChartPage = ({dates}) => {

        // console.log(dates)
    const greenFeasts = dates.filter((date) => {
        return date.celebrations.filter((celebration) => {
            return celebration.colour === "green"
        })
    })

    // console.log(greenFeasts);

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