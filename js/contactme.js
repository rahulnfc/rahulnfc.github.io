
// jQuery.validator.addMethod("phone", function(phone_number, element) {
//     phone_number = phone_number.replace(/\s+/g, "");
//     return this.optional(element) || phone_number.length > 9 && 
//     phone_number.match(/^(\+?1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/);
// }, "Please specify a valid phone number");

    $("#submit-form").validate({
        rules:{
            Name:{
                required: true
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
            method:"post",
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
        

// $("#submit-form").submit((e)=>{
//     e.preventDefault()
//     $.ajax({
//         url:"https://script.google.com/macros/s/AKfycby0ymh9ajQt0btq8EOU4U6rmdFFoqHTy8LUVWEWEucZ1u-7cawKE0AGGw/exec",
//         data:$("#submit-form").serialize(),
//         method:"post",
//         success:function (response){
//             alert("Form submitted successfully")
//             window.location.reload()
//         },
//         error:function (err){
//             alert("Something Error")
//         }
//     })
// })
