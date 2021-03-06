import { Component, OnInit, ViewEncapsulation, Directive } from "@angular/core";

declare var d3: any;

@Component({
    templateUrl : 'charttest01.component.html',
    styleUrls : ['charttest01.component.css', '../../../../node_modules/nvd3/build/nv.d3.css'],
    encapsulation : ViewEncapsulation.None
    
})
export class ChartTest01Component implements OnInit{

    options_BarChart;
    data;

    options_AreaChart;
    data_AreaChart;
    
    options_CandleChart;
    data_CandleChart;

    options_BubbleChart;
    data_BubbleChart;

    weatherData: Weather[];

    citiesPopulations: CitiesPopulation[];

    dsMaleAge: MaleAgeStructure[];

    dsDrillDown: DataItem[];
    dsDrillDownSrc: DataItem[];
    isFirstLevel: boolean;
    colors: string[] = ["#6babac", "#e55253"];


    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    ngOnInit() {

        this.SetBarChart();
        this.SetAreaChart();
        this.SetCandleCharet();
        this.DxChart_MultiplePanes();
        this.SetCityPopulationData();
        this.SetMaleAgeData();
        this.SetDrillDownData();
        this.isFirstLevel = true;
    }

   

    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    SetBarChart(){
        this.options_BarChart = {
            chart: {
              type: 'discreteBarChart',
              height: 350,
              margin : {
                top: 20,
                right: 20,
                bottom: 50,
                left: 55
              },
              x: function(d){return d.label;},
              y: function(d){return d.value;},
              showValues: true,
              valueFormat: function(d){
                return d3.format(',.4f')(d);
              },
              duration: 500,
              xAxis: {
                axisLabel: 'X Axis'
              },
              yAxis: {
                axisLabel: 'Y Axis',
                axisLabelDistance: -10
              }
            }
        }

        this.data = [
            {
              key: "Cumulative Return",
              values: [
                {
                  "label" : "A" ,
                  "value" : -29.765957771107
                } ,
                {
                  "label" : "B" ,
                  "value" : 0
                } ,
                {
                  "label" : "C" ,
                  "value" : 32.807804682612
                } ,
                {
                  "label" : "D" ,
                  "value" : 196.45946739256
                } ,
                {
                  "label" : "E" ,
                  "value" : 0.19434030906893
                } ,
                {
                  "label" : "F" ,
                  "value" : -98.079782601442
                } ,
                {
                  "label" : "G" ,
                  "value" : -13.925743130903
                } ,
                {
                  "label" : "H" ,
                  "value" : -5.1387322875705
                }
              ]
            }
        ];
    }

    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    SetAreaChart(){
        this.options_AreaChart = 
        {
            chart: {
                type: 'stackedAreaChart',
                height: 400,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 30,
                    left: 40
                },
                x: function(d){return d[0];},
                y: function(d){return d[1];},
                useVoronoi: false,
                clipEdge: true,
                duration: 100,
                useInteractiveGuideline: true,
                xAxis: {
                    showMaxMin: false,
                    tickFormat: function(d) {
                        return d3.time.format('%x')(new Date(d))
                    }
                },
                yAxis: {
                    tickFormat: function(d){
                        return d3.format(',.2f')(d);
                    }
                },
                zoom: {
                    enabled: true,
                    scaleExtent: [1, 10],
                    useFixedDomain: false,
                    useNiceScale: false,
                    horizontalOff: false,
                    verticalOff: true,
                    unzoomEventType: 'dblclick.zoom'
                }
            }
        };

        this.data_AreaChart = [
            {
                "key" : "North America" ,
                "values" : [ [ 1025409600000 , 23.041422681023] , [ 1028088000000 , 19.854291255832] , [ 1030766400000 , 21.02286281168] , [ 1033358400000 , 22.093608385173] , [ 1036040400000 , 25.108079299458] , [ 1038632400000 , 26.982389242348] , [ 1041310800000 , 19.828984957662] , [ 1043989200000 , 19.914055036294] , [ 1046408400000 , 19.436150539916] , [ 1049086800000 , 21.558650338602] , [ 1051675200000 , 24.395594061773] , [ 1054353600000 , 24.747089309384] , [ 1056945600000 , 23.491755498807] , [ 1059624000000 , 23.376634878164] , [ 1062302400000 , 24.581223154533] , [ 1064894400000 , 24.922476843538] , [ 1067576400000 , 27.357712939042] , [ 1070168400000 , 26.503020572593] , [ 1072846800000 , 26.658901244878] , [ 1075525200000 , 27.065704156445] , [ 1078030800000 , 28.735320452588] , [ 1080709200000 , 31.572277846319] , [ 1083297600000 , 30.932161503638] , [ 1085976000000 , 31.627029785554] , [ 1088568000000 , 28.728743674232] , [ 1091246400000 , 26.858365172675] , [ 1093924800000 , 27.279922830032] , [ 1096516800000 , 34.408301211324] , [ 1099195200000 , 34.794362930439] , [ 1101790800000 , 35.609978198951] , [ 1104469200000 , 33.574394968037] , [ 1107147600000 , 31.979405070598] , [ 1109566800000 , 31.19009040297] , [ 1112245200000 , 31.083933968994] , [ 1114833600000 , 29.668971113185] , [ 1117512000000 , 31.490638014379] , [ 1120104000000 , 31.818617451128] , [ 1122782400000 , 32.960314008183] , [ 1125460800000 , 31.313383196209] , [ 1128052800000 , 33.125486081852] , [ 1130734800000 , 32.791805509149] , [ 1133326800000 , 33.506038030366] , [ 1136005200000 , 26.96501697216] , [ 1138683600000 , 27.38478809681] , [ 1141102800000 , 27.371377218209] , [ 1143781200000 , 26.309915460827] , [ 1146369600000 , 26.425199957518] , [ 1149048000000 , 26.823411519396] , [ 1151640000000 , 23.850443591587] , [ 1154318400000 , 23.158355444054] , [ 1156996800000 , 22.998689393695] , [ 1159588800000 , 27.9771285113] , [ 1162270800000 , 29.073672469719] , [ 1164862800000 , 28.587640408904] , [ 1167541200000 , 22.788453687637] , [ 1170219600000 , 22.429199073597] , [ 1172638800000 , 22.324103271052] , [ 1175313600000 , 17.558388444187] , [ 1177905600000 , 16.769518096208] , [ 1180584000000 , 16.214738201301] , [ 1183176000000 , 18.729632971229] , [ 1185854400000 , 18.814523318847] , [ 1188532800000 , 19.789986451358] , [ 1191124800000 , 17.070049054933] , [ 1193803200000 , 16.121349575716] , [ 1196398800000 , 15.141659430091] , [ 1199077200000 , 17.175388025297] , [ 1201755600000 , 17.286592443522] , [ 1204261200000 , 16.323141626568] , [ 1206936000000 , 19.231263773952] , [ 1209528000000 , 18.446256391095] , [ 1212206400000 , 17.822632399764] , [ 1214798400000 , 15.53936647598] , [ 1217476800000 , 15.255131790217] , [ 1220155200000 , 15.660963922592] , [ 1222747200000 , 13.254482273698] , [ 1225425600000 , 11.920796202299] , [ 1228021200000 , 12.122809090924] , [ 1230699600000 , 15.691026271393] , [ 1233378000000 , 14.720881635107] , [ 1235797200000 , 15.387939360044] , [ 1238472000000 , 13.765436672228] , [ 1241064000000 , 14.631445864799] , [ 1243742400000 , 14.292446536221] , [ 1246334400000 , 16.170071367017] , [ 1249012800000 , 15.948135554337] , [ 1251691200000 , 16.612872685134] , [ 1254283200000 , 18.778338719091] , [ 1256961600000 , 16.756026065421] , [ 1259557200000 , 19.385804443146] , [ 1262235600000 , 22.950590240168] , [ 1264914000000 , 23.61159018141] , [ 1267333200000 , 25.708586989581] , [ 1270008000000 , 26.883915999885] , [ 1272600000000 , 25.893486687065] , [ 1275278400000 , 24.678914263176] , [ 1277870400000 , 25.937275793024] , [ 1280548800000 , 29.461381693838] , [ 1283227200000 , 27.357322961861] , [ 1285819200000 , 29.057235285673] , [ 1288497600000 , 28.549434189386] , [ 1291093200000 , 28.506352379724] , [ 1293771600000 , 29.449241421598] , [ 1296450000000 , 25.796838168807] , [ 1298869200000 , 28.740145449188] , [ 1301544000000 , 22.091744141872] , [ 1304136000000 , 25.07966254541] , [ 1306814400000 , 23.674906973064] , [ 1309406400000 , 23.418002742929] , [ 1312084800000 , 23.24364413887] , [ 1314763200000 , 31.591854066817] , [ 1317355200000 , 31.497112374114] , [ 1320033600000 , 26.67238082043] , [ 1322629200000 , 27.297080015495] , [ 1325307600000 , 20.174315530051] , [ 1327986000000 , 19.631084213898] , [ 1330491600000 , 20.366462219461] , [ 1333166400000 , 19.284784434185] , [ 1335758400000 , 19.157810257624]]
            }
        ];

        

    }

    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    SetCandleCharet(){

        this.options_CandleChart ={
            chart: {
                type: 'candlestickBarChart',
                height: 350,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 66,
                    left: 60
                },
                x: function(d){ return d['date']; },
                y: function(d){ return d['close']; },
                duration: 100,
                
                xAxis: {
                    axisLabel: 'Dates',
                    tickFormat: function(d) {

                        var re = d.toString();
                        return re.substring(0,4)
                               + '-' +re.substring(4,6)
                               + '-' +re.substring(6,8);

                        
                    },
                    showMaxMin: false
                },

                yAxis: {
                    axisLabel: 'Stock Price',
                    tickFormat: function(d){
                        return '$' + d3.format(',.1f')(d);
                    },
                    showMaxMin: false
                },
                zoom: {
                    enabled: true,
                    scaleExtent: [1, 10],
                    useFixedDomain: false,
                    useNiceScale: false,
                    horizontalOff: false,
                    verticalOff: true,
                    unzoomEventType: 'dblclick.zoom'
                }
            }
        };

        this.data_CandleChart = [{values: [
            {"date": "20170101", "open": 165.42, "high": 165.8, "low": 164.34, "close": 165.22, "volume": 160363400, "adjusted": 164.35},
            {"date": "20170102", "open": 165.35, "high": 166.59, "low": 165.22, "close": 165.83, "volume": 107793800, "adjusted": 164.96},
            {"date": "20170103", "open": 165.37, "high": 166.31, "low": 163.13, "close": 163.45, "volume": 176850100, "adjusted": 162.59},
            {"date": "20170104", "open": 163.83, "high": 164.46, "low": 162.66, "close": 164.35, "volume": 168390700, "adjusted": 163.48},
            {"date": "20170105", "open": 164.44, "high": 165.1, "low": 162.73, "close": 163.56, "volume": 157631500, "adjusted": 162.7},
            {"date": "20170106", "open": 163.09, "high": 163.42, "low": 161.13, "close": 161.27, "volume": 211737800, "adjusted": 160.42},
            {"date": "20170107", "open": 161.2, "high": 162.74, "low": 160.25, "close": 162.73, "volume": 200225500, "adjusted": 161.87},
            {"date": "20170108", "open": 163.85, "high": 164.95, "low": 163.14, "close": 164.8, "volume": 188337800, "adjusted": 163.93},
            {"date": "20170110", "open": 165.31, "high": 165.4, "low": 164.37, "close": 164.8, "volume": 105667100, "adjusted": 163.93},
            {"date": "20170111", "open": 163.3, "high": 164.54, "low": 162.74, "close": 163.1, "volume": 159505400, "adjusted": 162.24},
            {"date": "20170112", "open": 164.22, "high": 164.39, "low": 161.6, "close": 161.75, "volume": 177361500, "adjusted": 160.9},
            {"date": "20170113", "open": 165.42, "high": 165.8, "low": 164.34, "close": 165.22, "volume": 160363400, "adjusted": 164.35},
            {"date": "20170115", "open": 165.35, "high": 166.59, "low": 165.22, "close": 165.83, "volume": 107793800, "adjusted": 164.96},
            {"date": "20170116", "open": 165.37, "high": 166.31, "low": 163.13, "close": 163.45, "volume": 176850100, "adjusted": 162.59},
            {"date": "20170117", "open": 163.83, "high": 164.46, "low": 162.66, "close": 164.35, "volume": 168390700, "adjusted": 163.48},
            {"date": "20170118", "open": 164.44, "high": 165.1, "low": 162.73, "close": 163.56, "volume": 157631500, "adjusted": 162.7},
            {"date": "20170119", "open": 163.09, "high": 163.42, "low": 161.13, "close": 161.27, "volume": 211737800, "adjusted": 160.42},
            {"date": "20170120", "open": 161.2, "high": 162.74, "low": 160.25, "close": 162.73, "volume": 200225500, "adjusted": 161.87},
            {"date": "20170121", "open": 163.85, "high": 164.95, "low": 163.14, "close": 164.8, "volume": 188337800, "adjusted": 163.93},
            {"date": "20170122", "open": 165.31, "high": 165.4, "low": 164.37, "close": 164.8, "volume": 105667100, "adjusted": 163.93},
            {"date": "20170123", "open": 163.3, "high": 164.54, "low": 162.74, "close": 163.1, "volume": 159505400, "adjusted": 162.24},
            {"date": "20170124", "open": 164.22, "high": 164.39, "low": 161.6, "close": 161.75, "volume": 177361500, "adjusted": 160.9},
            
        ]}];  
    }

    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    SetBubbleChart(){

        var diameter = 500, //max size of the bubbles
            color    = d3.scale.category20b(); //color category
        
        var bubble = d3.layout.pack()
            .sort(null)
            .size([diameter, diameter])
            .padding(1.5);
        
        var svg = d3.select("body")
            .append("svg")
            .attr("width", diameter)
            .attr("height", diameter)
            .attr("class", "bubble");
        
        d3.csv("fruit.csv", function(error, data){
        
            //convert numerical values from strings to numbers
            data = data.map(function(d){ d.value = +d["Amount"]; return d; });
        
            //bubbles needs very specific format, convert data to this.
            var nodes = bubble.nodes({children:data}).filter(function(d) { return !d.children; });
        
            //setup the chart
            var bubbles = svg.append("g")
                .attr("transform", "translate(0,0)")
                .selectAll(".bubble")
                .data(nodes)
                .enter();
        
            //create the bubbles
            bubbles.append("circle")
                .attr("r", function(d){ return d.r; })
                .attr("cx", function(d){ return d.x; })
                .attr("cy", function(d){ return d.y; })
                .style("fill", function(d) { return color(d.value); });
        
            //format the text for each bubble
            bubbles.append("text")
                .attr("x", function(d){ return d.x; })
                .attr("y", function(d){ return d.y + 5; })
                .attr("text-anchor", "middle")
                .text(function(d){ return d["Fruit"]; })
                .style({
                    "fill":"white", 
                    "font-family":"Helvetica Neue, Helvetica, Arial, san-serif",
                    "font-size": "12px"
                });
        })

    }

    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    DxChart_MultiplePanes()
    {
        this.weatherData =  [{
            month: "January",
            avgT: 9.8,
            minT: 4.1,
            maxT: 15.5,
            prec: 109
        }, {
            month: "February",
            avgT: 11.8,
            minT: 5.8,
            maxT: 17.8,
            prec: 104
        }, {
            month: "March",
            avgT: 13.4,
            minT: 7.2,
            maxT: 19.6,
            prec: 92
        }, {
            month: "April",
            avgT: 15.4,
            minT: 8.1,
            maxT: 22.8,
            prec: 30
        }, {
            month: "May",
            avgT: 18,
            minT: 10.3,
            maxT: 25.7,
            prec: 10
        }, {
            month: "June",
            avgT: 20.6,
            minT: 12.2,
            maxT: 29,
            prec: 2
        }, {
            month: "July",
            avgT: 22.2,
            minT: 13.2,
            maxT: 31.3,
            prec: 2
        }, {
            month: "August",
            avgT: 22.2,
            minT: 13.2,
            maxT: 31.1,
            prec: 1
        }, {
            month: "September",
            avgT: 21.2,
            minT: 12.4,
            maxT: 29.9,
            prec: 8
        }, {
            month: "October",
            avgT: 17.9,
            minT: 9.7,
            maxT: 26.1,
            prec: 24
        }, {
            month: "November",
            avgT: 12.9,
            minT: 6.2,
            maxT: 19.6,
            prec: 64
        }, {
            month: "December",
            avgT: 9.6,
            minT: 3.4,
            maxT: 15.7,
            prec: 76
        }];
    }

    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    temperatureCustomizeText() {
        // return this.valueText + " °C";
        return '';
    }

    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    precipitationCustomizeText() {
        //return this.valueText  + " mm";

        return '';
    }

    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    SetCityPopulationData(){
        this.citiesPopulations = [{
            name: "Africa",
            items: [{
                value: 21324000,
                name: "Lagos",
                country: "Nigeria"
            }, {
                value: 9735000,
                name: "Kinshasa",
                country: "Democratic Republic of the Congo"
            }, {
                value: 9278441,
                name: "Cairo",
                country: "Egypt"
            }]
        }, {
            name: "Asia",
            items: [{
                value: 24256800,
                name: "Shanghai",
                country: "China"
            }, {
                value: 23500000,
                name: "Karachi",
                country: "Pakistan"
            }, {
                value: 21516000,
                name: "Beijing",
                country: "China"
            }, {
                value: 16787941,
                name: "Delhi",
                country: "India"
            }, {
                value: 15200000,
                name: "Tianjin",
                country: "China"
            }]
        }, {
            name: "Australia",
            items: [{
                value: 4840600,
                name: "Sydney",
                country: "Austraila"
            }, {
                value: 4440000,
                name: "Melbourne",
                country: "Austraila"
            }]
        }, {
            name: "Europe",
            items: [{
                value: 14160467,
                name: "Istanbul",
                country: "Turkey"
            }, {
                value: 12197596,
                name: "Moscow",
                country: "Russia"
            }, {
                value: 8538689,
                name: "London",
                country: "United Kingdom"
            }, {
                value: 5191690,
                name: "Saint Petersburg",
                country: "Russia"
            }, {
                value: 4470800,
                name: "Ankara",
                country: "Turkey"
            }, {
                value: 3517424,
                name: "Berlin",
                country: "Germany"
            }]
        }, {
            name: "North America",
            items: [{
                value: 8874724,
                name: "Mexico City",
                country: "Mexico"
            }, {
                value: 8550405,
                name: "New York City",
                country: "United States"
            }, {
                value: 3884307,
                name: "Los Angeles",
                country: "United States"
            }, {
                value: 2808503,
                name: "Toronto",
                country: "Canada"
            }]
        }, {
            name: "South America",
            items: [{
                value: 11895893,
                name: "São Paulo",
                country: "Brazil"
            }, {
                value: 8693387,
                name: "Lima",
                country: "Peru"
            }, {
                value: 7776845,
                name: "Bogotá",
                country: "Colombia"
            }, {
                value: 6429923,
                name: "Rio de Janeiro",
                country: "Brazil"
            }]
        }];
    }

    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    customizeTooltip2(arg) {
        var data = arg.node.data,
            result = null;

        if (arg.node.isLeaf()) {
            result = "<b>" + data.name + "</b> (" +
                data.country + ")<br/>Population: " + arg.valueText;
        }

        return {
            text: result
        };
    }

    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    SetMaleAgeData()
    {
        this.dsMaleAge = [{
            state: "Germany",
            young: 6.7,
            middle: 28.6,
            older: 5.1
        }, {
            state: "Japan",
            young: 9.6,
            middle: 43.4,
            older: 9
        }, {
            state: "Russia",
            young: 13.5,
            middle: 49,
            older: 5.8
        }, {
            state: "USA",
            young: 30,
            middle: 90.3,
            older: 14.5
        }];
        
    }

    //Set Drill Down
    //________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    SetDrillDownData(){

        this.dsDrillDownSrc = 
        [
            { arg: "Asia", val: 3007613498, parentID: "" },
            { arg: "North America", val: 493603615, parentID: "" },
            { arg: "Europe", val: 438575293, parentID: "" },
            { arg: "Africa", val: 381331438, parentID: "" },
            { arg: "South America", val: 331126555, parentID: "" },
            { arg: "Nigeria", val: 181562056, parentID: "Africa" },
            { arg: "Egypt", val: 88487396, parentID: "Africa" },
            { arg: "Congo", val: 77433744, parentID: "Africa" },
            { arg: "Morocco", val: 33848242, parentID: "Africa" },
            { arg: "China", val: 1380083000, parentID: "Asia" },
            { arg: "India", val: 1306687000, parentID: "Asia" },
            { arg: "Pakistan", val: 193885498, parentID: "Asia" },
            { arg: "Japan", val: 126958000, parentID: "Asia" },
            { arg: "Russia", val: 146804372, parentID: "Europe" },
            { arg: "Germany", val: 82175684, parentID: "Europe" },
            { arg: "Turkey", val: 79463663, parentID: "Europe" },
            { arg: "France", val: 66736000, parentID: "Europe" },
            { arg: "United Kingdom", val: 63395574, parentID: "Europe" },
            { arg: "United States", val: 325310275, parentID: "North America" },
            { arg: "Mexico", val: 121005815, parentID: "North America" },
            { arg: "Canada", val: 36048521, parentID: "North America" },
            { arg: "Cuba", val: 11239004, parentID: "North America" },
            { arg: "Brazil", val: 205737996, parentID: "South America" },
            { arg: "Colombia", val: 48400388, parentID: "South America" },
            { arg: "Venezuela", val: 30761000, parentID: "South America" },
            { arg: "Peru", val: 28220764, parentID: "South America" },
            { arg: "Chile", val: 18006407, parentID: "South America" }
        ];

        this.dsDrillDown = this.filterData("");
    }
    
    customizeTooltip(arg: any) {
        return {
            text: arg.seriesName + ' years: ' + arg.valueText
        };
    }

    onButtonClick() {
        if (!this.isFirstLevel) {
            this.isFirstLevel = true;
            this.dsDrillDown= this.filterData("");
        }
    }

    onPointClick(e) {
        if (this.isFirstLevel) {
            this.isFirstLevel = false;
            this.dsDrillDown = this.filterData(e.target.originalArgument);
        }
    }

    filterData(name): DataItem[] {
        return this.dsDrillDownSrc.filter(function (item) {
            return item.parentID === name;
        });
    }

    customizePoint =() => {
        let pointSettings: any;

        pointSettings = {
            color: this.colors[Number(this.isFirstLevel)]
        };

        if (!this.isFirstLevel) {
            pointSettings.hoverStyle = {
                hatching: "none"
            };
        }

        return pointSettings;
    }

   

}
//#############################################################################################################################
//class
//#############################################################################################################################

//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
export class Weather {
    month: string;
    avgT: number;
    minT: number;
    maxT: number;
    prec: number;
}//class

//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
@Directive({
    selector: 'bubble-chart'
})
export class BubbleChartComponent {
    margin = 20;
    diameter = 460;
    color = d3.scale.linear()
        .domain([-1, 5])
        .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
        .interpolate(d3.interpolateHcl);

    pack = d3.layout.pack()
        .padding(2)
        .size([this.diameter - this.margin, this.diameter - this.margin])
        .value(function (d) { return d.size; })

    // svg = d3.select("div").append("svg")
    svg = d3.select("svg")
        .attr("width", this.diameter)
        .attr("height", this.diameter)
        .append("g")
        .attr("transform", "translate(" + this.diameter / 2 + "," + this.diameter / 2 + ")");

    chart = d3.json("src/app/test/ChartTest01/flare.json", (error, root) => {
        if (error) 
        {
            console.log("bubble chart error : " + error);
            throw error
        };

        var focus = root,
            nodes = this.pack.nodes(root),
            view;

        var circle = this.svg.selectAll("circle")
            .data(nodes)
            .enter().append("circle")
            .attr("class", function (d) { return d.parent ? d.children ? "node" : "node node--leaf" : "node node--root"; })
            .style("fill", (d) => { return d.children ? this.color(d.depth) : null; })
            .on("click", (d) => { if (focus !== d) zoom.call(this, d), d3.event.stopPropagation(); });

        var text = this.svg.selectAll("text")
            .data(nodes)
            .enter().append("text")
            .attr("class", "label")
            .style("fill-opacity", function (d) { return d.parent === root ? 1 : 0; })
            .style("display", function (d) { return d.parent === root ? "inline" : "none"; })
            .text(function (d) { return d.name; });

        var node = this.svg.selectAll("circle,text");

        d3.select("body")
            .style("background", this.color(-1))
            .on("click", () => { zoom.call(this, root); });

        zoomTo.call(this, [root.x, root.y, root.r * 2 + this.margin]);

        function zoom(d) {
            var focus0 = focus; focus = d;

            var transition = d3.transition()
                .duration(d3.event.altKey ? 7500 : 750)
                .tween("zoom", (d) => {
                    var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + this.margin]);
                    return (t) => { zoomTo.call(this, i(t)); };
                });

            transition.selectAll("text")
                .filter(function (d) { return d.parent === focus || this.style.display === "inline"; })
                .style("fill-opacity", function (d) { return d.parent === focus ? 1 : 0; })
                .each("start", function (d) { if (d.parent === focus) this.style.display = "inline"; })
                .each("end", function (d) { if (d.parent !== focus) this.style.display = "none"; });
        }

        function zoomTo(v) {
            var k = this.diameter / v[2]; view = v;
            node.attr("transform", function (d) { return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")"; });
            circle.attr("r", function (d) { return d.r * k; });
        }
    });

}//class

//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
export interface CityPopulation {
    value: number;
    name: string;
    country: string;
}

//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
export interface CitiesPopulation {
    name: string;
    items: CityPopulation[];
}

//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
export class MaleAgeStructure {
    state: string;
    young: number;
    middle: number;
    older: number;
}


//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
export class DataItem {
    arg: string;
    val: number;
    parentID: string;
}