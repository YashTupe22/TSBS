'use server';

export async function submitReservation(formData: FormData) {
  const data = {
    date: formData.get('date'),
    guests: formData.get('guests'),
    time: formData.get('time'),
    occasion: formData.get('occasion'),
    notes: formData.get('notes'),
  };

  // TODO: Implement actual reservation logic (send to database, email, etc.)
  console.log('Reservation submitted:', data);

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    success: true,
    message: 'Reservation request received! We will contact you shortly to confirm.',
  };
}

export async function subscribeNewsletter(formData: FormData) {
  const email = formData.get('email');

  // TODO: Implement actual newsletter subscription (add to mailing list)
  console.log('Newsletter subscription:', email);

  await new Promise(resolve => setTimeout(resolve, 500));

  return {
    success: true,
    message: 'Thank you for subscribing to our newsletter!',
  };
}
