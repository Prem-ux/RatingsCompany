export async function fetchRatings() {

// Simulate network delay and API call
//Need to understand Promise part
return new Promise((resolve, reject) => {
setTimeout(() => {
    resolve([{
        id:1,
        companyName: "Company A",
        rating: "AAA",
        sector:"Finance",
        lastUpdated: "2023-10-01",
    },{
        id:2,
        companyName: "Company B",
        sector:"Technology",
        rating: "AA",
        lastUpdated: "2023-10-02",
    }]);
},1000)

});
}