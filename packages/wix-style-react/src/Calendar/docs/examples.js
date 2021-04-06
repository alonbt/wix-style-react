export const ExampleYearMonths = `class YearMonthsCalendarExample extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        date: new Date('2017/05/01'),
        excludePastDates: true,
      };
    }

    onChange(date) {
      this.setState({ date });
    }

    render() {
      return (
        <Calendar
          showMonthDropdown
          showYearDropdown
          onChange={date => this.onChange(date)}
          value={this.state.date}
        />
      );
    }
  }`;

export const ExampleStandard = `class ControlledCalendarExample extends React.Component {

    state = {
      value: { from: new Date('2018/11/14'), to: new Date('2018/11/18') },
      excludePastDates: false,
      numOfMonths: 1,
      selectionMode: 'range',
    };

    onChange = value => {
      this.setState({ value });
    }

    onMonthChange = value => {
      this.setState({ month: value });
    }

    toggleExclude = ()=> {
      this.setState(({ excludePastDates }) => ({
        excludePastDates: !excludePastDates,
      }));
    }

    toggleSelectionMode = ()=> {
      this.setState({
        selectionMode: this.state.selectionMode === 'day' ? 'range' : 'day',
      });
    }

    render() {
      const {excludePastDates, value, month, selectionMode, numOfMonths} = this.state
      return (
        <div>
          <Calendar
            excludePastDates = {excludePastDates}
            onChange={value => this.onChange(value)}
            onMonthChange={value => this.onMonthChange(value)}
            value={value}
            month={month}
            selectionMode={selectionMode}
            numOfMonths={numOfMonths}
          />
          <div style={{ display: 'flex' }}>
            <ToggleSwitch
              checked={excludePastDates}
              onChange={() => this.toggleExclude()}
            />
            <Text>Exclude Past Days</Text>
          </div>
          <div style={{ display: 'flex' }}>
            <ToggleSwitch
              checked={selectionMode === 'day'}
              onChange={() => this.toggleSelectionMode()}
            />
            <Text>
              Selection Mode:{' '}
              {selectionMode === 'day' ? 'Single day' : 'Date range'}
            </Text>
          </div>
        </div>
      );
    }
  }`;

export const ExampleIndication = `class YearMonthsCalendarExample extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedDate: new Date('2020/12/16'),
      };
    }

    onChange(selectedDate) {
      this.setState({ selectedDate });
    }

    render() {
      const { selectedDate } = this.state;

      return (
        <Calendar
          showMonthDropdown
          showYearDropdown
          onChange={date => this.onChange(date)}
          value={selectedDate}
          dateIndication={({date, isSelected }) => {
            if (date.getTime() < new Date('2020/12/17').getTime()) {
              const IndicationColor = isSelected  ? 'white' : '#4EB7F5';

              return (
                <div className="Indications" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                     <div className="indication" style={{ borderRadius: '50%', width: '4px', height: '4px', backgroundColor: IndicationColor }}/>
                </div>
                );
            }
          }}
        />
      );
    }
  }`;

export const ExampleA11Y = `class YearMonthsCalendarExample extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedDate: new Date('2020/12/16'),
      };
    }

    onChange(selectedDate) {
      this.setState({ selectedDate });
    }

    render() {
      const { selectedDate } = this.state;

      return (
        <Calendar
          showMonthDropdown
          showYearDropdown
          onChange={date => this.onChange(date)}
          value={selectedDate}
          leftArrowAriaLabel="Previous Month"
          rightArrowAriaLabel="Next Month"
          monthDropdownAriaLabel="Months"
          yearDropdownAriaLabel="Years"
        />
      );
    }
  }`;
