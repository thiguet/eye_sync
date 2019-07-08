// CommitChart.js
<script>
import { Bar } from 'vue-chartjs'
 
const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
        {
            label: 'GitHub Commits',
            backgroundColor: '#f87979',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        }
    ]
};

const options = {
     legend: {
        labels: {
            fontColor: '#f87979',
            fontFamily: 'Montserrat'
        }
    }   
}

export default {
  name: 'bar-chart',
  extends: Bar,
  props: ['data', 'options'],
  mounted () {
    this.renderChart(data, options)
  }
}
</script>

