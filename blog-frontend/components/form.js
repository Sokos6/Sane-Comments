export default function Form({_id}) {

  const [formData, setFormData] = useState();

  const[isSubmitting, setIsSubmitting] = useState(false);
  const[hasSubmitted, setHasSubmitted] = useState(false);

  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = async data => {
    // submit handler
  }

  if (isSubmitting) {
    // Returns a submitting comment state if being processed
    return <h3>Submitting comment...</h3>
  }

  if (hasSubmitted) {
    // returns the data that the user submitted for them to preview after submission
    return (
      <>
        <h3>Thanks for your comment!</h3>
        <ul>
          <li>
            Name: {formData.name} <br />
            Email: {formData.email} <br/>
            Comment: {formData.comment}
          </li>
        </ul>
      </>
    )
  }

  return (
    // Sets up the Form markup
  )
}