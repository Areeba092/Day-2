export default{
    name: 'order',
    type: 'document',
    field:[
        {name:'customerid', type:'string', title:'Customer ID'},
        {name:'product', type:'array', of:[{type:'reference', to:[{type:'product'}]}] ,title:'Products'},
        {name:'paymentStutas', type:'string', title:'Payment Status'},
        {name:'orderDate', type:'datetime', title:'Order Date'}
    ]
};