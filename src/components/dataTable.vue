<template>
 <v-layout row wrap> 
    <v-flex md12 v-if="date !== ''">
      {{getCurrentMonth}}
      {{getMonth}}
      <v-data-table id="firstTable"
        :items="rows"
        hide-actions
        class="elevation-1">
        <template slot="headers" slot-scope="props">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th v-for="n in getCurrentMonth" :key= "n">{{n}}</th>
            <th>Actions</th>
          </tr>
        </template>
        <template slot="items" slot-scope="props">
          <td>{{ props.item.id }}</td>
          <td>{{ props.item.name }}</td>
          <td v-for="(item, i) in getMonth" :key="i"> {{item[1]}} </td>
        </template>
      </v-data-table>
  </v-flex>
  <v-flex xs12 sm6 md4>
      <v-menu
      ref="menu2"
      :close-on-content-click="false"
      v-model="menu2"
      :nudge-right="40"
      :return-value.sync="date"
      lazy
      transition="scale-transition"
      offset-y
      full-width
      min-width="290px"
    >
      <v-text-field
        slot="activator"
        v-model="date"
        label="Month"
        prepend-icon="event"
        readonly
      ></v-text-field>
      <v-date-picker type="month" v-model="date" @input="$refs.menu2.save(date)"></v-date-picker>
    </v-menu>
  </v-flex>
  </v-layout>
</template>
<script>
  export default {
    data () {
      return {
        date: '',
        monthArray: [['2018-2-01', 'P'], ['2018-02-02', 'P'], ['2018-02-05', 'A'], ['2018-02-06', 'P'], ['2018-02-07', 'P'], ['2018-02-08', 'P'], ['2018-02-09', 'P'], ['2018-02-12', 'P'], ['2018-02-13', 'A'], ['2018-02-14', 'P'], ['2018-02-15', 'P'], ['2018-02-16', 'A'], ['2018-02-19', 'P'], ['2018-02-20', 'P'], ['2018-02-21', 'A'], ['2018-02-22', 'A'], ['2018-02-23', 'P'], ['2018-02-26', 'P'], ['2018-02-27', 'P'], ['2018-02-28', 'A']],
        dataArray: [],
        dialog: false,
        getValues: '',
        menu2: false,
        rows: [
        {id: 1, name: 'Arslan Hanif'}
        // {id: 2, name: 'Haseeb'},
        // {id: 3, name: 'Faizan'},
        // {id: 4, name: 'Imad'},
        // {id: 5, name: 'Naseeb'},
        // {id: 6, name: 'Bilal'},
        // {id: 7, name: 'Ehtisham'}
        ]
      }
    },
    computed: {
      getCurrentMonth () {
        let getYearAndMonth = this.date.split('-')
        let totalDays = new Date(getYearAndMonth[0], getYearAndMonth[1], 0).getDate()
        return totalDays
      },
      getMonth () {
        // let arr = []
        let that = this
        let dataArray = []
        for (let i = 0; i <= this.getCurrentMonth; i++) {
          // arr.push(this.date + '-' + i)
          for (let j = 0; j < that.monthArray.length; j++) {
            // arr.parseInt(this.monthArray[2])
            let currentDay = this.monthArray[j][0].split('-')
            // console.log(currentDay[2], i)
            if (i === parseInt(currentDay[2])) {
              console.log(i)
              // console.log('current attendance is ', this.monthArray[j])
              if (this.monthArray[j] !== undefined && this.monthArray[j] !== null) {
                dataArray[i] = [i, this.monthArray[j][1]]
              }
              // if (this.monthArray[i][1] === 'P' || this.monthArray[i][1] === 'A') {
              //   dataArray.push([i, this.monthArray[j][1]])
              // }
            } else if (!dataArray[i]) {
              dataArray[i] = [i, 'H']
            }
          }
        }
        dataArray.shift()
        return dataArray
      }
    }
  }
</script>

<style>
            #firstTable {
            font-family: 'Open Sans', sans-serif;
            border-collapse: collapse;
            border: 3px solid #44475C;
          }

          #firstTable th {
            text-transform: uppercase;
            text-align: left;
            background: #44475C;
            color: rgb(226, 216, 216);
            padding: 8px;  
          }
          #firstTable td {
            text-align: left;
            padding: 8px;
            border-right: 2px solid #7D82A8; 
          }        
</style>