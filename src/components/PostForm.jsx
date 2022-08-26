import Input from "./Input";
import { Formik, Form } from "formik";
import * as yup from "yup";

const PostForm = ({ postMethod, formType, ID, userID }) => {
  const schema = yup.object().shape({
    postTitle: yup
      .string()
      .min(
        5,
        (postTitle) =>
          `Title must be at least ${postTitle.min} characters. Character count: ${postTitle.value.length}`
      )
      .max(30, "Title cannot be longer than 30 characters")
      .required("Title cannot be empty"),
    postBody: yup
      .string()
      .max(300, "Post cannot be longer than 300 characters")
      .required("Post cannot be empty")
  });

  /*
Since the post request doesn't save any changes to the 'database',
I did not add ID and userID to the method, as ID would come
from the backend and userID would come from the user's data
that does not exist here
This also causes a key prop warning when adding a post,
as new posts have no ID
*/

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
          <Formik
            initialValues={{
              postTitle: "",
              postBody: ""
            }}
            onSubmit={(values) =>
              postMethod.name.includes("update")
                ? postMethod(ID, userID, values.postTitle, values.postBody)
                : postMethod(values.postTitle, values.postBody)
            }
            validationSchema={schema}
          >
            <Form>
              <h3 className="text-center" data-testid="createPostHeader">
                {postMethod.name.includes("update")
                  ? "Edit post"
                  : "Create post"}
              </h3>
              <Input
                name="postTitle"
                type="text"
                label="Title"
                isTextArea={false}
              />
              <Input
                name="postBody"
                type="text"
                label="Post"
                isTextArea={true}
              />
              <button
                type="submit"
                className="btn btn-primary mt-2"
                data-testid="createPostButton"
              >
                {formType}
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
