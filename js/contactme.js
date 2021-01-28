
$(function(){
    if($("#submit-form").length){
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
                    minlength:10
                },
                Message:{
                    required: true
                }
            }
        })
    }
    else{
        $("#submit-form").submit((e)=>{
            e.preventDefault()
            $.ajax({
                url:"https://script.google.com/macros/s/AKfycby0ymh9ajQt0btq8EOU4U6rmdFFoqHTy8LUVWEWEucZ1u-7cawKE0AGGw/exec",
                data:$("#submit-form").serialize(),
                method:"post",
                success:function (response){
                    alert("Form submitted successfully")
                    window.location.reload()
                },
                error:function (err){
                    alert("Something Error")
                }
            })
        })
        
    }

})

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
