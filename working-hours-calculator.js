'use strict';

const e = React.createElement;
const workingHoursCount = 8;

class WorkingHoursCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ratio: 1 };
  }

  render() {
    return e(
      'button',
      { onClick: () => calculate(this.state.ratio) },
      'Calculate'
    );
  }
}

const domContainer = document.querySelector('#working-hours-calculator');
ReactDOM.render(e(WorkingHoursCalculator), domContainer);

function calculate(){
  var ratio = document.getElementById("ratio").value;
  var timeConverted = convertHoursToMinutes(workingHoursCount * ratio);
  var node = document.createElement("h1");
  var textNode = document.createTextNode( 'Wamiar pracy: ' + ratio + ' przekłada się na ' + timeConverted.hours + 'h i ' + timeConverted.minutes + 'm');
  node.appendChild(textNode);
  document.querySelector('#working-hours-calculator').appendChild(node);
}

function convertHoursToMinutes(timeInHours){
  let hours = Math.floor(timeInHours);
  let minutes = Math.round((timeInHours % 1) * 60);
  return {hours: hours, minutes: minutes};
}
