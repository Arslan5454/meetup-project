<template>
  <v-layout row wrap>
    <v-flex md12 v-if="date !== ''">
      <v-dialog v-model="dialog" max-width="500px">
        <v-btn slot="activator" color="primary" dark class="mb-2">New Item</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.id"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.name"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
           <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-data-table id="firstTable"
        :items="rows"
        :headers="header"
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
          <td v-for="(item, i) in getCurrentMonth" :key="i"> A </td>
          <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
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
        menu2: false,
        header: [
         { text: 'Actions', value: 'name', sortable: false }

        ],
        rows: [
      {value: false, id: 1, name: 'Arslan Hanif'},
      {value: false, id: 2, name: 'Haseeb'},
      {value: false, id: 3, name: 'Faizan'},
      {value: false, id: 4, name: 'Imad'},
      {value: false, id: 5, name: 'Naseeb'},
      {value: false, id: 6, name: 'Bilal'},
      {value: false, id: 7, name: 'Ehtisham'}
        ],
        row: [],
        editedIndex: -1,
        editedItem: {
          id: '',
          name: ''
        },
        defaultItem: {
          id: '',
          name: ''
        }
      }
    },
    computed: {
      getCurrentMonth () {
        let getYearAndMonth = this.date.split('-')
        return new Date(getYearAndMonth[0], getYearAndMonth[1], 0).getDate()
      },
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
      daysInMonth () {
        return this.getCurrentMonth
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.rows = [
          {
            id: '',
            name: 'Arslan Hanif'
          },
          {
            id: '2',
            name: 'Haseeb'
          },
          {
            id: '3',
            name: 'Faizan'
          },
          {
            id: '4',
            name: 'Imad'
          },
          {
            id: '5',
            name: 'Naseeb'
          },
          {
            id: '6',
            name: 'Bilal'
          },
          {
            id: '7',
            name: 'Ehitsham'
          }
        ]
      },

      editItem (item) {
        this.editedIndex = this.rows.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.rows.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.rows.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.rows[this.editedIndex], this.editedItem)
        } else {
          this.rows.push(this.editedItem)
        }
        this.close()
      }
    }
  }
</script>
<style>
            #firstTable {
            font-family: 'Open Sans', sans-serif;
            border-collapse: collapse;
            border: 3px solid #44475C;
            margin: 10px 10px 0 10px;
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