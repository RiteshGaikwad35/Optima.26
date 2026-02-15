
-- Create event_registrations table
CREATE TABLE public.event_registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  mobile TEXT NOT NULL,
  email TEXT,
  branch TEXT,
  college TEXT,
  year_of_study TEXT,
  event_id TEXT NOT NULL,
  event_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.event_registrations ENABLE ROW LEVEL SECURITY;

-- Anyone can register (insert)
CREATE POLICY "Anyone can register for events"
ON public.event_registrations
FOR INSERT
WITH CHECK (true);

-- Anyone can view event registrations
CREATE POLICY "Anyone can view event registrations"
ON public.event_registrations
FOR SELECT
USING (true);

-- Admins can update event registrations
CREATE POLICY "Admins can update event registrations"
ON public.event_registrations
FOR UPDATE
USING (is_admin(auth.uid()));

-- Admins can delete event registrations
CREATE POLICY "Admins can delete event registrations"
ON public.event_registrations
FOR DELETE
USING (is_admin(auth.uid()));

-- Create sponsorship_registrations table
CREATE TABLE public.sponsorship_registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  mobile TEXT NOT NULL,
  email TEXT,
  company_name TEXT,
  is_company BOOLEAN DEFAULT false,
  sponsorship_type TEXT NOT NULL,
  payment_screenshot_url TEXT,
  payment_status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.sponsorship_registrations ENABLE ROW LEVEL SECURITY;

-- Anyone can register for sponsorship (insert)
CREATE POLICY "Anyone can register for sponsorship"
ON public.sponsorship_registrations
FOR INSERT
WITH CHECK (true);

-- Anyone can view sponsorship registrations
CREATE POLICY "Anyone can view sponsorship registrations"
ON public.sponsorship_registrations
FOR SELECT
USING (true);

-- Admins can update sponsorship registrations
CREATE POLICY "Admins can update sponsorship registrations"
ON public.sponsorship_registrations
FOR UPDATE
USING (is_admin(auth.uid()));

-- Admins can delete sponsorship registrations
CREATE POLICY "Admins can delete sponsorship registrations"
ON public.sponsorship_registrations
FOR DELETE
USING (is_admin(auth.uid()));

-- Add updated_at triggers
CREATE TRIGGER update_event_registrations_updated_at
BEFORE UPDATE ON public.event_registrations
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_sponsorship_registrations_updated_at
BEFORE UPDATE ON public.sponsorship_registrations
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
