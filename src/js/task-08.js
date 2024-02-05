function handleFormSubmit(event) {
    event.preventDefault();
    const loginForm = event.target;
    const formElements = loginForm.elements;
    if (formElements.email.value === '' || formElements.password.value === '') {
        alert('Please fill in all fields');
        return;
      }
      const formData = {
        email: formElements.email.value,
        password: formElements.password.value
      };
      console.log('Form Data:', formData);
      loginForm.reset();
  }
