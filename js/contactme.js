
    $("#submit-form").validate({
        rules:{
            Name:{
                required: true,
                minlength:3,
                maxlength:10
            },
            Email:{
                required: true,
                email: true
            },
            Number:{
                required: true,
                number: true,
                minlength:10,
                maxlength:10
            },
            Message:{
                required: true
            }
        },
        submitHandler:(form, e)=>{
        e.preventDefault();
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycby0ymh9ajQt0btq8EOU4U6rmdFFoqHTy8LUVWEWEucZ1u-7cawKE0AGGw/exec",
            data:$("form").serialize(),
            method:"POST",
            success:function (response){
                alert("Form submitted successfully")
                window.location.reload()
            },
            error:function (err){
                alert("Something Error")
            }
        })
    }
});
        

