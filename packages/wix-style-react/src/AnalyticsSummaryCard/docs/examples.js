const chartData = `[
  {
    label: new Date('2020-09-03T21:00:00.000Z'),
    value: 100,
  },
  {
    label: new Date('2020-09-04T21:00:00.000Z'),
    value: 17,
  },
  {
    label: new Date('2020-09-05T21:00:00.000Z'),
    value: 18,
  },
]`;

export const simple = `
    <AnalyticsSummaryCard
        chartColorHex="#3899ec"
        chartData={${chartData}}
        chartWidth={169}
        title="Sessions"
        value="1,9K"
        getChartTooltipContent={(index) => <span style={{ color: '#ffffff' }}>{index}</span>}
    />`;

export const sparkline = `
    <AnalyticsSummaryCard
        chartColorHex="#3899ec"
        chartData={${chartData}}
        chartWidth={69}
        title="Sessions"
        value="1,9K"
        getChartTooltipContent={(index) => <span style={{ color: '#ffffff' }}>{index}</span>}
    />`;

export const tooltipOnTitle = `
    <AnalyticsSummaryCard
        chartColorHex="#3899ec"
        chartData={${chartData}}
        chartWidth={169}
        title="Sessions"
        value="1,9K"
        titleTooltip="Site Sessions in your site. A session is a set of interactions made by visitors"
        getChartTooltipContent={(index) => <span style={{ color: '#ffffff' }}>{index}</span>}
    />`;
export const tooltipOnValue = `
    <AnalyticsSummaryCard
        chartColorHex="#3899ec"
        chartData={${chartData}}
        chartWidth={169}
        title="Sessions"
        value="1,9K"
        valueTooltip="1,951"
        getChartTooltipContent={(index) => <span style={{ color: '#ffffff' }}>{index}</span>}
    />`;

export const loader = `
    <AnalyticsSummaryCard
        chartColorHex="#3899ec"
        chartData={${chartData}}
        chartWidth={169}
        onChartHover={() => console.log('on chart hover')}
        title="Sessions"
        getChartTooltipContent={(index) => <span style={{ color: '#ffffff' }}>{index}</span>}
        isLoading={true}
        value="1,9K"
        
    />`;

export const actionButton = `
    <AnalyticsSummaryCard
        chartColorHex="#3899ec"
        chartData={${chartData}}
        chartWidth={169}
        ctaButton={<IconButton size="tiny" skin="inverted"><Icons.Refresh/></IconButton>}
        onCTAClick={() => console.log('refresh click')}
        onChartHover={() => console.log('on chart hover')}
        title="Sessions"
        getChartTooltipContent={(index) => <span style={{ color: '#ffffff' }}>{index}</span>}
        value="1,9K"
        
    />`;

export const trend = `
<div>
<div>    
<AnalyticsSummaryCard
        chartColorHex="#3899ec"
        chartData={${chartData}}
        chartWidth={169}
        onChartHover={() => console.log('on chart hover')}
        trend={12}
        isTrendVisible={true}
        title="Sessions"
        getChartTooltipContent={(index) => <span style={{ color: '#ffffff' }}>{index}</span>}
        value="1,9K"
        
        />
        </div>
        <br/>
        <br/>
        <div>
        <AnalyticsSummaryCard
          chartColorHex="#3899ec"
          chartData={${chartData}}
          chartWidth={169}
          onChartHover={() => console.log('on chart hover')}
          trend={-12}
          isTrendVisible={true}
          title="Sessions"
          getChartTooltipContent={(index) => <span style={{ color: '#ffffff' }}>{index}</span>}
          value="1,9K"
          
        />
        </div>
        </div>
        `;

export const footer = `
        <AnalyticsSummaryCard
            chartColorHex="#3899ec"
            chartData={${chartData}}
            chartWidth={169}
            onChartHover={() => console.log('on chart hover')}
            title="Sessions"
            getChartTooltipContent={(index) => <span style={{ color: '#ffffff' }}>{index}</span>}
            value="1,9K"
            
            footer={<div><div><Text>This is footer text </Text></div><div><Button size="tiny">Click Here </Button></div></div>}
            />`;

export const clickable = `
<div>        
<div>
        <AnalyticsSummaryCard
            chartColorHex="#3899ec"
            chartData={${chartData}}
            chartWidth={169}
            onChartHover={() => console.log('on chart hover')}
            onClick={() => console.log('general click')}
            title="Sessions"
            getChartTooltipContent={(index) => <span style={{ color: '#ffffff' }}>{index}</span>}
            value="1,9K"
            
            />
          </div>
          <br/>
          <br/>
          <div>
          <AnalyticsSummaryCard
            chartColorHex="#3899ec"
            chartData={${chartData}}
            chartWidth={169}
            onChartHover={() => console.log('on chart hover')}
            title="Sessions"
            getChartTooltipContent={(index) => <span style={{ color: '#ffffff' }}>{index}</span>}
            value="1,9K"
            
          />
          </div>
          </div>
            `;

export const ctaWithoutClickable = `
            <AnalyticsSummaryCard
            chartColorHex="#3899ec"
            chartData={${chartData}}
            chartWidth={169}
            ctaButton={<IconButton size="tiny"><Icons.Refresh/></IconButton>}
            onCTAClick={() => console.log('refresh click')}
            onChartHover={() => console.log('on chart hover')}
            trend={12}
            isTrendVisible={true}
            title="Sessions"
            getChartTooltipContent={(index) => <span style={{ color: '#ffffff' }}>{index}</span>}
            value="1,9K"
            
            footer={<div><div><Text>This is footer text </Text></div><div><Button size="tiny">Click Here </Button></div></div>}
            />`;
