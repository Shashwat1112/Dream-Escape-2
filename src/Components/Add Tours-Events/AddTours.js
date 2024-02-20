import React from "react";

const AddTours = () => {
  return (
    <div>
        <div className="container">
            <div className="row p-5">
                <div className="col-xl-3"></div>
                <div className="col-xl-6">
        <h2 style={{textAlign:"center"}}>Add Events and Tours</h2>
      <form style={{margin:"20px"}}>
        <div class="mb-3">
          <label for="" class="form-label">
            Event or Tour Package
          </label>
          <input
            type="text"
            class="form-control"
            id="tourEvent"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="" class="form-label">
            State or Province
          </label>
          <input
            type="password"
            class="form-control"
            id="tourState"
          />
          <div id="" class="form-text">
            Add any of the 28 states or 4 Union Territories of Republic of India.
          </div>
        </div>
        <div class="mb-3">
          <label for="" class="form-label">
            Price (in Indian Rupees: INR)
          </label>
          <input
            type="number"
            class="form-control"
            id="tourPrice"
            aria-describedby="tourPrice"
          />
          </div>
          <div class="mb-3">
          <label for="" class="form-label">
            Description
          </label>
          <input
            type="textarea"
            class="form-control"
            id="tourDescription"
            aria-describedby="tourDescription"
          />
          </div>
          <div class="mb-3">
          <label for="" class="form-label">
            Event Date
          </label>
          <input
            type="date"
            class="form-control"
            id="tourDate"
            aria-describedby="tourDate"
          />
          </div>
          <div class="mb-3">
          <label for="" class="form-label">
            Number of days required
          </label>
          <input
            type="number"
            class="form-control"
            id="tourDays"
            aria-describedby="tourDays"
          />
          <div id="" class="form-text">
           From start till end of the package.
          </div>
          </div>
          <div class="mb-3">
          <label for="" class="form-label">
            Daily Schedule
          </label>
          <input
            type="textarea"
            class="form-control"
            id="tourSchedule"
            aria-describedby="tourSchedule"
          />
          </div>
        <div class="mb-3 form-check">
          <input type="checkbox" required="required" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            I agree to all terms and conditions of Dream Escape Tours and Travels.
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      </div>
      </div>
      </div>
      <div className="col-xl-3"></div>
    </div>
  );
};

export default AddTours;
