const MongoClient=require('mongodb').MongoClient;
const url="mongodb+srv://tanmoypaul1005:EA5gBOboBQnOMnlg@cluster0.nswkl.mongodb.net?retryWrites=true&w=majority";

MongoClient.connect(url,(err,MyMongoClient)=>{
if(err){
    console.log('Connection Fail')
}
else{
    console.log('Connection Success')
    // InsertData(MyMongoClient);
    // DeleteOneItem(MyMongoClient);
    // DelateAllItem(MyMongoClient);

    // FindOneWithCondition(MyMongoClient);
    // FindAllData(MyMongoClient);
    // FindAllDataByProjection(MyMongoClient);

    // FindAllDataByQuery(MyMongoClient);

    // FindAllDataByLimit(MyMongoClient);
    // FindAllDataBySort(MyMongoClient);

    // UpdateMyData(MyMongoClient);

    // CreateMyCollection(MyMongoClient);
    DeleteMyCollection(MyMongoClient);
}

});

//Data Insert
function InsertData(MyMongoClient){
  const MyDataBase =  MyMongoClient.db('school');
  const MyCollection = MyDataBase.collection('students');
  const MyData={name:"Bonik",Roll:"12",class:"Ten",city:"comila"};
  MyCollection.insertOne(MyData,(err)=>{
 if(err){
 console.log("Data insert Fail")
 }
 else{
    console.log("Data insert success")   
 }
  });
}



// Delate one DATA
function DeleteOneItem(MyMongoClient){
    const MyDataBase=MyMongoClient.db('school');
    const MyCollection=MyDataBase.collection('students');

    const DeleteItem ={Roll:"81"};
    MyCollection.deleteOne(DeleteItem,(err)=>{
if(err){
    console.log("Data Delete Fail")
}
else{
    console.log("Data Delete Success")
}
    });
}


//Delete Many Data
function DelateAllItem(MyMongoClient){
    const MyDataBase=MyMongoClient.db('school');
    const MyCollection=MyDataBase.collection('students');
     
    MyCollection.deleteMany((err,ResultObj)=>{
        if(err){
            console.log('Delate Fail')
        }
        else{
            console.log(ResultObj)
        }
    });
    }



    //FineOne 
    function FindOneWithCondition(MyMongoClient){
     const MyDataBase=MyMongoClient.db('school');
     const MyCollection=MyDataBase.collection('students');

     const FindObj={Roll:"12"};
     MyCollection.findOne(FindObj,(err,result)=>{
             console.log(result)
     });
    }



    //Find
    function FindAllData(MyMongoClient){
    const MyDataBase=MyMongoClient.db('school');
    const MyCollection=MyDataBase.collection('students');

    MyCollection.find().toArray((err,result)=>{
        console.log(result)
    });
    }



    //Find Data Projection 
    function FindAllDataByProjection(MyMongoClient) {
        var MyDataBase= MyMongoClient.db('school');
        var MyCollection= MyDataBase.collection('students');
    
        var ItemObj={}
        var ItemProjection={projection:{class:"",Roll:""}}
    
        MyCollection.find(ItemObj,ItemProjection).toArray(function (error,result) {
            console.log(result)
        })
    }


    //Query
    function FindAllDataByQuery(MyMongoClient){
        const MyDataBase=MyMongoClient.db('school');
        const MyCollection=MyDataBase.collection('students');

        const Query={city:'Dhaka', Roll:"12"};
        MyCollection.find(Query).toArray((err,result) => {
            console.log(result)
        })
    }



    //Limit
    function FindAllDataByLimit(MyMongoClient){
        const MyDataBase=MyMongoClient.db('school');
        const MyCollection=MyDataBase.collection('students');

        MyCollection.find().limit(5).toArray((err,result) => {
        console.log(result)
        });
    }



    //sort
    function FindAllDataBySort(MyMongoClient) {
            const MyDataBase=MyMongoClient.db('school');
            const MyCollection=MyDataBase.collection('students');
            
            var SortPattern={Roll :-1}
            MyCollection.find().sort(SortPattern).toArray((err,result) => {
            console.log(result)
            });
    }



     //Update Data
    function UpdateMyData(MyMongoClient){
        const MyDataBase=MyMongoClient.db('school');
        const MyCollection=MyDataBase.collection('students');
    
        const MyQuery={class:"C"};
        const MyNewValues={$set:{name:"Rabbil Hasan Rupom",city:"Gaibandha"}}
    
        MyCollection.updateOne(MyQuery,MyNewValues,function (error,result) {
            console.log(result);
        })
    }

    //Create Collection
    function CreateMyCollection(MyMongoClient){
        const MyDataBase=MyMongoClient.db('school');
        MyDataBase.createCollection("teachers",(err,result) => {
        console.log(result);
        });
    }

    

    // Delete Collection
    function DeleteMyCollection(MyMongoClient){
        var MyDataBase= MyMongoClient.db("school");
    
        MyDataBase.dropCollection("teachers",(error,result)=> {
            console.log(result);
        })
    
    }