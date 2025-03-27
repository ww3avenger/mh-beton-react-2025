import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { sendContactEmail, ContactFormData } from '../services/emailService';

const KontaktContainer = styled.div`
  padding: 6rem 2rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  scroll-margin-top: 80px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 500;
`;

const Input = styled.input<{ $hasError?: boolean }>`
  padding: 0.8rem;
  border: 1px solid ${props => props.$hasError ? '#dc3545' : '#ddd'};
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${props => props.$hasError ? '#dc3545' : '#007bff'};
    box-shadow: 0 0 0 2px ${props => props.$hasError ? 'rgba(220, 53, 69, 0.25)' : 'rgba(0, 123, 255, 0.25)'};
  }
`;

const TextArea = styled.textarea<{ $hasError?: boolean }>`
  padding: 0.8rem;
  border: 1px solid ${props => props.$hasError ? '#dc3545' : '#ddd'};
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;

  &:focus {
    outline: none;
    border-color: ${props => props.$hasError ? '#dc3545' : '#007bff'};
    box-shadow: 0 0 0 2px ${props => props.$hasError ? 'rgba(220, 53, 69, 0.25)' : 'rgba(0, 123, 255, 0.25)'};
  }
`;

const ErrorMessage = styled.span`
  color: #dc3545;
  font-size: 0.875rem;
`;

const SuccessMessage = styled.div`
  padding: 1rem;
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  border-radius: 4px;
  color: #155724;
  margin-bottom: 1rem;
`;

const ErrorAlert = styled.div`
  padding: 1rem;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
  color: #721c24;
  margin-bottom: 1rem;
`;

const Button = styled.button<{ $isLoading?: boolean }>`
  padding: 1rem 2rem;
  background: ${props => props.$isLoading ? '#6c757d' : '#007bff'};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: ${props => props.$isLoading ? 'not-allowed' : 'pointer'};
  transition: background 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: ${props => props.$isLoading ? '#6c757d' : '#0056b3'};
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;

  h2 {
    color: #333;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1rem;
      color: #666;

      i {
        color: #007bff;
        width: 20px;
      }

      a {
        color: #007bff;
        text-decoration: none;
        
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const formSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen lang sein'),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein'),
  telefon: z.string().optional(),
  nachricht: z.string().min(10, 'Nachricht muss mindestens 10 Zeichen lang sein')
});

type FormData = z.infer<typeof formSchema>;

const Kontakt: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      await sendContactEmail(data as ContactFormData);
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Ein unerwarteter Fehler ist aufgetreten');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <KontaktContainer className="kontakt-section">
      <h1>Kontaktieren Sie uns</h1>
      
      <ContactInfo>
        <h2>Unsere Kontaktdaten</h2>
        <ul>
          <li>
            <i className="fas fa-map-marker-alt"></i>
            Traviatagasse 10/2/14, 1230 Wien
          </li>
          <li>
            <i className="fas fa-phone"></i>
            <a href="tel:+436609091992">+43 660 909 1992</a>
          </li>
          <li>
            <i className="fas fa-envelope"></i>
            <a href="mailto:office@mh-beton.at">office@mh-beton.at</a>
          </li>
          <li>
            <i className="fas fa-clock"></i>
            Mo-Fr: 7:00-17:00
          </li>
        </ul>
      </ContactInfo>

      <p>Füllen Sie das Formular aus und wir melden uns zeitnah bei Ihnen.</p>

      {submitSuccess && (
        <SuccessMessage>
          Ihre Nachricht wurde erfolgreich gesendet! Wir werden uns in Kürze bei Ihnen melden.
        </SuccessMessage>
      )}

      {submitError && (
        <ErrorAlert>{submitError}</ErrorAlert>
      )}

      <ContactForm onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            type="text"
            {...register('name')}
            $hasError={!!errors.name}
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">E-Mail *</Label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            $hasError={!!errors.email}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="telefon">Telefon (optional)</Label>
          <Input
            id="telefon"
            type="tel"
            {...register('telefon')}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="nachricht">Ihre Nachricht *</Label>
          <TextArea
            id="nachricht"
            {...register('nachricht')}
            $hasError={!!errors.nachricht}
          />
          {errors.nachricht && <ErrorMessage>{errors.nachricht.message}</ErrorMessage>}
        </FormGroup>

        <Button type="submit" $isLoading={isSubmitting} disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <span>Wird gesendet...</span>
            </>
          ) : (
            'Nachricht senden'
          )}
        </Button>
      </ContactForm>
    </KontaktContainer>
  );
};

export default Kontakt;
