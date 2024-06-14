fetch('https://reqres.in/api/users?page=1')
.then(res=>res.json())
.then(result=>{
    output=''
    for (i=0;i<result['data'].length;i++)
        {
            user=result['data'][i]
            output+=`<tr>
            <td>${user.id}</td>
            <td>${user.email}</td>
            <td>${user.first_name}</td>
            <td>${user.last_name}</td>
            <td><img src="${user.avatar}" alt=''></td>
            </tr>`
        }
        console.log(result['data'])
        document.getElementById('records1').innerHTML=output
})
fetch('https://reqres.in/api/users?page=2')
.then(res=>res.json())
.then(result=>{
    output=''
    for (i=0;i<result['data'].length;i++)
        {
            user=result['data'][i]
            output+=`<tr>
            <td>${user.id}</td>
            <td>${user.email}</td>
            <td>${user.first_name}</td>
            <td>${user.last_name}</td>
            <td><img src="${user.avatar}" alt=''></td>
            </tr>`
        }
        console.log(result['data'])
        document.getElementById('records').innerHTML=output
})