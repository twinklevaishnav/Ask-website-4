let btnShow = document.querySelector('button');
btnShow.addEventListener('click', () => {
    // swal("My Title","Hello world!","success");
    // swal({
    //     title: 'My Title' ,
    //     text: 'Hello World' ,
    //     icon: 'success' ,
    //     button: 'Custom Button'
    // })
    
    // swal({
    //     title: "Are you sure?",
    //     text: "Once deleted, you will not be able to recover this imaginary file!",
    //     icon: "warning",
    //     buttons: true,
    //     dangerMode: true,
    //   })
    //   .then((willDelete) => {
    //     if (willDelete) {
    //       swal("Poof! Your imaginary file has been deleted!", {
    //         icon: "success",
    //       });
    //     } else {
    //       swal("Your imaginary file is safe!");
    //     }
    //   });

    //     swal("Click on either the button or outside the modal.")
    // .then((value) => {
    //   swal(`The returned value is: ${value}`);
    // });

    // swal("A wild Pikachu appeared! What do you want to do?", {
    //     buttons: {
    //       cancel: "Run away!",
    //       catch: {
    //         text: "Throw Pokéball!",
    //         value: "catch",
    //       },
    //       defeat: true,
    //     },
    //   })
    //   .then((value) => {
    //     switch (value) {
       
    //       case "defeat":
    //         swal("Pikachu fainted! You gained 500 XP!");
    //         break;
       
    //       case "catch":
    //         swal("Gotcha!", "Pikachu was caught!", "success");
    //         break;
       
    //       default:
    //         swal("Got away safely!");
    //     }
    //   });

    // swal({
    //     text: 'Search for a movie. e.g. "La La Land".',
    //     content: "input",
    //     button: {
    //       text: "Search!",
    //       closeModal: false,
    //     },
    //   })
    //   .then(name => {
    //     if (!name) throw null;
       
    //     return fetch(`https://itunes.apple.com/search?term=${name}&entity=movie`);
    //   })
    //   .then(results => {
    //     return results.json();
    //   })
    //   .then(json => {
    //     const movie = json.results[0];
       
    //     if (!movie) {
    //       return swal("No movie was found!");
    //     }
       
    //     const name = movie.trackName;
    //     const imageURL = movie.artworkUrl100;
       
    //     swal({
    //       title: "Top result:",
    //       text: name,
    //       icon: imageURL,
    //     });
    //   })
    //   .catch(err => {
    //     if (err) {
    //       swal("Oh noes!", "The AJAX request failed!", "error");
    //     } else {
    //       swal.stopLoading();
    //       swal.close();
    //     }
    //   });

    // swal("Write something here:", {
    //     content: "input",
    //   })
    //   .then((value) => {
    //     swal(`You typed: ${value}`);
    //   });

    // swal({

    //     title: "Enter password",
    //     text: "To Login In",
    //     content: {
    //       element: "input",
    //       attributes: {
    //         placeholder: "Type your password",
    //         type: "password",
    //       },
    //     },
    //   });

    // swal({
    //    title: "Whitehat Junier",
    //    text: "Is A coding FlatFom",
    //    buttons:{
    //        cancel: "not interested" ,
    //        catch:{
    //            text: "Join In",
    //            value: "catch",
    //        }
    //    }
    //    .then((value) => {
    //     switch (value) {
       
    //       case "defeat":
    //         swal("Pikachu fainted! You gained 500 XP!");
    //         break;
       
    //       case "catch":
    //         swal("Gotcha!", "Pikachu was caught!", "success");
    //         break;
       
    //       default:
    //         swal("Got away safely!");
    //     }
    // })
       
    // })

    swal(
        
        {
            title: "Whitehat Junier",
            text: "Is A coding FlatFom",
            buttons: {
                cancel: "Not Interested",
                catch: {
                    text: "Join In",
                value: "catch",
          },
        },
      })
      .then((value) => {
        switch (value) {
       
          case "catch":
            swal({

                title: "Enter password",
                text: "To Login In",
                content: {
                  element: "input",
                  attributes: {
                    placeholder: "Type your password",
                    type: "password",
                  },
                },
              });
            break;
       
          default:
            swal("Not A good Idea !!!");
        }
        // if(){}
      });
 








































































































































})
