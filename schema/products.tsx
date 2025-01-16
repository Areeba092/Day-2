export default{
    name: 'product',
    type: 'document',
    field:[
        {name:'name', type:'string', title:'Product Name'},
        {name:'price', type:'number', title:'Price'},
        {name:'stock', type:'number', title:'Stock Level'},
        {name:'category', type:'string', title:'Category'},
        {name:'image', type:'image', title:'Product Image'}
    ]
};