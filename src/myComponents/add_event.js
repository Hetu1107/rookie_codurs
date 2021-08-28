import React from 'react';
import "./add_event.css"
function AddEvent(){
    return(
        <div className="Add_item">
        <div className="form" id="form">
            <form action="" id="form2">
<div class="cont">
            <div id="" class="form-contro">

                <input type="text" name="" id="username" autocomplete="" required />
                <label for="text">Event Name</label>
            </div>
            <div id="" class="form-contro">
                <input type="text" name="" id="username" autocomplete="" required />
                <label for="text">Event Date</label>
            </div>
            <div id="" class="form-contro">
                <input type="text" name="" id="username" autocomplete="" required />
                <label for="text">Topics</label>
            </div>
            <div id="" class="form-contro">
                <input type="url" name="" id="username" autocomplete="" required />
                <label for="url">Form Link</label>
            </div>
                </div>
        </form>
        <div className="add_item_button">
        <button type="submit">Back</button>
        <button type="submit">Submit</button>
        </div>
        </div>
        </div>
    )
}
export default AddEvent