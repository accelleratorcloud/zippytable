export default {
    retrieveTableData({commit}){
        let tableData = [
            {
              name: "John",
              surname: "Doe",
              age: 22,
              address: "221B Baker Street",
              city: "London",
            },
            {
              name: "Albert",
              surname: "Einstein",
              age: 89,
              address: "Rathaus,1010",
              city: "Vienna",
            },
            {
                name: "Moxart",
                surname: "",
                age: 89,
                address: "Rathaus,1010",
                city: "Vienna",
              },
              {
                name: "James",
                surname: "McGill",
                age: 40,
                address: "Albuquerque",
                city: "Albuquerque",
              },
          ];
        commit('SET_TABLE_DATA',tableData);
    }
}