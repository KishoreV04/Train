let addtrain=document.getElementById('addTrain');
let trainDetail=document.getElementById('trainDetails');
addtrain.addEventListener('click',function(){
    trainDetail.style.display='block';
});
function Train(train_name,arrival_time,dept_time){
    this.train_name=train_name;
    this.arrival_time=arrival_time;
    this.dept_time=dept_time;
}
let Trains=[];
function submitDetails(){
    const TrainName=document.getElementById('TrainName').value;
    const arrival_time=document.getElementById('arrivalTime').value;
    const dept_time=document.getElementById('depttime').value;
    let curr_details=new  Train(TrainName,arrival_time,dept_time);
    Trains.push(curr_details);
    alert("Train Added SuccesFully");

}
function searchTrain(){
    const key_Train=document.getElementById('trainNo').value;
    let flag=0;
    for(let i=0;i<Trains.length;i++){
        if(Trains[i].train_name==key_Train){
            document.write(Trains[i].train_name+" arrived on "+Trains[i].arrival_time+" will departs at "+Trains[i].dept_time);
            flag=1;
            break;
        }
    }
    if(flag==0){
        document.write("Train Not Found");
    }
}