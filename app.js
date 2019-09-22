$('#navbar').load('navbar.html');

const response = $.get('http://localhost:3001/devices');
console.log(response);

devices.forEach(function(device) {
    $('#devices tbody').append(`
    <tr>
        <td>${device.user}</td>
        <td>${device.name}</td>
    </tr>`
    );
   });

$.get('http://localhost:3001/devices')
.then(response => {
    response.forEach(device => {
        $('#devices tbody').append(`
            <tr>
                <td>${device.user}</td>
                <td>${device.name}</td>
            </tr>`
        );
    });
})
.catch(error => {
    console.error(`Error: ${error}`);
});


$('#add-device').on('click', () => {
    const name = $('#name').val();
    const user = $('#user').val();
    const sensorData = [];

    const body = {
        name,
        user,
        sensorData
    };

    $.post('http://localhost:3001/devices', body)
    .then(response => {
        location.href = '/';
    })
    .catch(error => {
        console.error(`Error: ${error}`);
    });
   });
$('#send-command').on('click', function() {
    const command = $('#command').val();
    console.log('command is: ${command}');
});


   