const students=[
    {
        name:'Kanchi',
        age:23,
        course:'bca',
        marks:230
    },
    {
        name:'Prince',
        age:20,
        course:'bca',
        marks:356
    },
    {
        name:'Amritpal',
        age:26,
        course:'mca',
        marks:350
    }
    ];
    const updatedStudents=students.filter(s=>{
        return s.course=='mca'
    });
    
    const newValues=students.map(stu=>{
        let percentage=(stu.marks/500*100).toFixed(2)+"%";
        stu.percentage=percentage;
        
        return stu;
    })
    console.log(newValues);