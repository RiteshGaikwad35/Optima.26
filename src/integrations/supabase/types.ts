export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      event_registrations: {
        Row: {
          branch: string | null
          college: string | null
          created_at: string
          email: string | null
          event_id: string
          event_name: string | null
          full_name: string
          id: string
          mobile: string
          updated_at: string
          year_of_study: string | null
        }
        Insert: {
          branch?: string | null
          college?: string | null
          created_at?: string
          email?: string | null
          event_id: string
          event_name?: string | null
          full_name: string
          id?: string
          mobile: string
          updated_at?: string
          year_of_study?: string | null
        }
        Update: {
          branch?: string | null
          college?: string | null
          created_at?: string
          email?: string | null
          event_id?: string
          event_name?: string | null
          full_name?: string
          id?: string
          mobile?: string
          updated_at?: string
          year_of_study?: string | null
        }
        Relationships: []
      }
      otp_verifications: {
        Row: {
          created_at: string
          expires_at: string
          id: string
          mobile_no: string
          otp: string
          verified: boolean
        }
        Insert: {
          created_at?: string
          expires_at?: string
          id?: string
          mobile_no: string
          otp: string
          verified?: boolean
        }
        Update: {
          created_at?: string
          expires_at?: string
          id?: string
          mobile_no?: string
          otp?: string
          verified?: boolean
        }
        Relationships: []
      }
      participants: {
        Row: {
          accommodation: string | null
          age: number | null
          audit_paid_amount: number | null
          cancellation_reason: string | null
          cancelled_at: string | null
          cash_paid: number | null
          created_at: string
          first_installment: number | null
          gender: string | null
          hotel_name: string | null
          id: string
          is_bogie_sevak: boolean | null
          is_cancelled: boolean | null
          is_ticket_sevak: boolean | null
          mobile_no: string
          name: string
          name_surname_first: string | null
          onward_berth: string | null
          onward_bogie_no: string | null
          onward_seat_no: string | null
          onward_tkt_no: string | null
          paid_by_mobile: string | null
          paid_by_name: string | null
          payment_confirmed: boolean | null
          payment_confirmed_at: string | null
          payment_mode: string | null
          razorpay_payment_id: string | null
          reach_to_pune: string | null
          refund_amount: number | null
          representative: string | null
          return_berth: string | null
          return_bogie_no: string | null
          return_seat_no: string | null
          return_tkt_no: string | null
          room_no: string | null
          to_whom: string | null
          to_whom_1st: string | null
          to_whom_2nd: string | null
          total_charges: number | null
          train: string | null
          updated_at: string
        }
        Insert: {
          accommodation?: string | null
          age?: number | null
          audit_paid_amount?: number | null
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cash_paid?: number | null
          created_at?: string
          first_installment?: number | null
          gender?: string | null
          hotel_name?: string | null
          id?: string
          is_bogie_sevak?: boolean | null
          is_cancelled?: boolean | null
          is_ticket_sevak?: boolean | null
          mobile_no: string
          name: string
          name_surname_first?: string | null
          onward_berth?: string | null
          onward_bogie_no?: string | null
          onward_seat_no?: string | null
          onward_tkt_no?: string | null
          paid_by_mobile?: string | null
          paid_by_name?: string | null
          payment_confirmed?: boolean | null
          payment_confirmed_at?: string | null
          payment_mode?: string | null
          razorpay_payment_id?: string | null
          reach_to_pune?: string | null
          refund_amount?: number | null
          representative?: string | null
          return_berth?: string | null
          return_bogie_no?: string | null
          return_seat_no?: string | null
          return_tkt_no?: string | null
          room_no?: string | null
          to_whom?: string | null
          to_whom_1st?: string | null
          to_whom_2nd?: string | null
          total_charges?: number | null
          train?: string | null
          updated_at?: string
        }
        Update: {
          accommodation?: string | null
          age?: number | null
          audit_paid_amount?: number | null
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cash_paid?: number | null
          created_at?: string
          first_installment?: number | null
          gender?: string | null
          hotel_name?: string | null
          id?: string
          is_bogie_sevak?: boolean | null
          is_cancelled?: boolean | null
          is_ticket_sevak?: boolean | null
          mobile_no?: string
          name?: string
          name_surname_first?: string | null
          onward_berth?: string | null
          onward_bogie_no?: string | null
          onward_seat_no?: string | null
          onward_tkt_no?: string | null
          paid_by_mobile?: string | null
          paid_by_name?: string | null
          payment_confirmed?: boolean | null
          payment_confirmed_at?: string | null
          payment_mode?: string | null
          razorpay_payment_id?: string | null
          reach_to_pune?: string | null
          refund_amount?: number | null
          representative?: string | null
          return_berth?: string | null
          return_bogie_no?: string | null
          return_seat_no?: string | null
          return_tkt_no?: string | null
          room_no?: string | null
          to_whom?: string | null
          to_whom_1st?: string | null
          to_whom_2nd?: string | null
          total_charges?: number | null
          train?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      participants_backup: {
        Row: {
          accommodation: string | null
          age: number | null
          audit_paid_amount: number | null
          backup_date: string
          backup_name: string
          cancellation_reason: string | null
          cancelled_at: string | null
          cash_paid: number | null
          created_at: string
          first_installment: number | null
          gender: string | null
          hotel_name: string | null
          id: string
          is_bogie_sevak: boolean | null
          is_cancelled: boolean | null
          is_ticket_sevak: boolean | null
          mobile_no: string
          name: string
          name_surname_first: string | null
          onward_berth: string | null
          onward_bogie_no: string | null
          onward_seat_no: string | null
          onward_tkt_no: string | null
          original_created_at: string | null
          original_id: string | null
          original_updated_at: string | null
          paid_by_mobile: string | null
          paid_by_name: string | null
          payment_confirmed: boolean | null
          payment_confirmed_at: string | null
          payment_mode: string | null
          razorpay_payment_id: string | null
          reach_to_pune: string | null
          refund_amount: number | null
          representative: string | null
          return_berth: string | null
          return_bogie_no: string | null
          return_seat_no: string | null
          return_tkt_no: string | null
          room_no: string | null
          to_whom: string | null
          to_whom_1st: string | null
          to_whom_2nd: string | null
          total_charges: number | null
          train: string | null
        }
        Insert: {
          accommodation?: string | null
          age?: number | null
          audit_paid_amount?: number | null
          backup_date?: string
          backup_name: string
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cash_paid?: number | null
          created_at?: string
          first_installment?: number | null
          gender?: string | null
          hotel_name?: string | null
          id?: string
          is_bogie_sevak?: boolean | null
          is_cancelled?: boolean | null
          is_ticket_sevak?: boolean | null
          mobile_no: string
          name: string
          name_surname_first?: string | null
          onward_berth?: string | null
          onward_bogie_no?: string | null
          onward_seat_no?: string | null
          onward_tkt_no?: string | null
          original_created_at?: string | null
          original_id?: string | null
          original_updated_at?: string | null
          paid_by_mobile?: string | null
          paid_by_name?: string | null
          payment_confirmed?: boolean | null
          payment_confirmed_at?: string | null
          payment_mode?: string | null
          razorpay_payment_id?: string | null
          reach_to_pune?: string | null
          refund_amount?: number | null
          representative?: string | null
          return_berth?: string | null
          return_bogie_no?: string | null
          return_seat_no?: string | null
          return_tkt_no?: string | null
          room_no?: string | null
          to_whom?: string | null
          to_whom_1st?: string | null
          to_whom_2nd?: string | null
          total_charges?: number | null
          train?: string | null
        }
        Update: {
          accommodation?: string | null
          age?: number | null
          audit_paid_amount?: number | null
          backup_date?: string
          backup_name?: string
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cash_paid?: number | null
          created_at?: string
          first_installment?: number | null
          gender?: string | null
          hotel_name?: string | null
          id?: string
          is_bogie_sevak?: boolean | null
          is_cancelled?: boolean | null
          is_ticket_sevak?: boolean | null
          mobile_no?: string
          name?: string
          name_surname_first?: string | null
          onward_berth?: string | null
          onward_bogie_no?: string | null
          onward_seat_no?: string | null
          onward_tkt_no?: string | null
          original_created_at?: string | null
          original_id?: string | null
          original_updated_at?: string | null
          paid_by_mobile?: string | null
          paid_by_name?: string | null
          payment_confirmed?: boolean | null
          payment_confirmed_at?: string | null
          payment_mode?: string | null
          razorpay_payment_id?: string | null
          reach_to_pune?: string | null
          refund_amount?: number | null
          representative?: string | null
          return_berth?: string | null
          return_bogie_no?: string | null
          return_seat_no?: string | null
          return_tkt_no?: string | null
          room_no?: string | null
          to_whom?: string | null
          to_whom_1st?: string | null
          to_whom_2nd?: string | null
          total_charges?: number | null
          train?: string | null
        }
        Relationships: []
      }
      registrations: {
        Row: {
          college_name: string
          created_at: string
          date_of_birth: string | null
          district: string | null
          education: string | null
          email_id: string | null
          full_address: string | null
          full_name: string | null
          id: string
          other_contact: string | null
          payment_screenshot_url: string | null
          payment_status: string | null
          payment_verified_at: string | null
          payment_verified_by: string | null
          registration_type: string
          selected_competitions: string[] | null
          team_competition: string | null
          team_leader_name: string | null
          team_leader_whatsapp: string | null
          team_members: Json | null
          team_name: string | null
          updated_at: string
          whatsapp_number: string
        }
        Insert: {
          college_name: string
          created_at?: string
          date_of_birth?: string | null
          district?: string | null
          education?: string | null
          email_id?: string | null
          full_address?: string | null
          full_name?: string | null
          id?: string
          other_contact?: string | null
          payment_screenshot_url?: string | null
          payment_status?: string | null
          payment_verified_at?: string | null
          payment_verified_by?: string | null
          registration_type: string
          selected_competitions?: string[] | null
          team_competition?: string | null
          team_leader_name?: string | null
          team_leader_whatsapp?: string | null
          team_members?: Json | null
          team_name?: string | null
          updated_at?: string
          whatsapp_number: string
        }
        Update: {
          college_name?: string
          created_at?: string
          date_of_birth?: string | null
          district?: string | null
          education?: string | null
          email_id?: string | null
          full_address?: string | null
          full_name?: string | null
          id?: string
          other_contact?: string | null
          payment_screenshot_url?: string | null
          payment_status?: string | null
          payment_verified_at?: string | null
          payment_verified_by?: string | null
          registration_type?: string
          selected_competitions?: string[] | null
          team_competition?: string | null
          team_leader_name?: string | null
          team_leader_whatsapp?: string | null
          team_members?: Json | null
          team_name?: string | null
          updated_at?: string
          whatsapp_number?: string
        }
        Relationships: []
      }
      sponsorship_registrations: {
        Row: {
          company_name: string | null
          created_at: string
          email: string | null
          full_name: string
          id: string
          is_company: boolean | null
          mobile: string
          payment_screenshot_url: string | null
          payment_status: string | null
          sponsorship_type: string
          updated_at: string
        }
        Insert: {
          company_name?: string | null
          created_at?: string
          email?: string | null
          full_name: string
          id?: string
          is_company?: boolean | null
          mobile: string
          payment_screenshot_url?: string | null
          payment_status?: string | null
          sponsorship_type: string
          updated_at?: string
        }
        Update: {
          company_name?: string | null
          created_at?: string
          email?: string | null
          full_name?: string
          id?: string
          is_company?: boolean | null
          mobile?: string
          payment_screenshot_url?: string | null
          payment_status?: string | null
          sponsorship_type?: string
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      volunteers: {
        Row: {
          blood_group: string
          class_year: string
          complete_address: string
          created_at: string
          district: string
          domain: string
          education: string
          email: string
          full_name: string
          id: string
          mobile_number: string
          referral_source: string | null
          search_name: string
          taluka: string
          tshirt_size: string
          updated_at: string
          whatsapp_number: string
        }
        Insert: {
          blood_group: string
          class_year: string
          complete_address: string
          created_at?: string
          district: string
          domain: string
          education: string
          email: string
          full_name: string
          id?: string
          mobile_number: string
          referral_source?: string | null
          search_name: string
          taluka: string
          tshirt_size: string
          updated_at?: string
          whatsapp_number: string
        }
        Update: {
          blood_group?: string
          class_year?: string
          complete_address?: string
          created_at?: string
          district?: string
          domain?: string
          education?: string
          email?: string
          full_name?: string
          id?: string
          mobile_number?: string
          referral_source?: string | null
          search_name?: string
          taluka?: string
          tshirt_size?: string
          updated_at?: string
          whatsapp_number?: string
        }
        Relationships: []
      }
      yatra_details: {
        Row: {
          content: string | null
          created_at: string
          created_by: string | null
          id: string
          image_url: string | null
          is_active: boolean | null
          priority: number | null
          title: string
          updated_at: string
        }
        Insert: {
          content?: string | null
          created_at?: string
          created_by?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          priority?: number | null
          title: string
          updated_at?: string
        }
        Update: {
          content?: string | null
          created_at?: string
          created_by?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          priority?: number | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_admin: { Args: { _user_id: string }; Returns: boolean }
      is_super_admin: { Args: { _user_id: string }; Returns: boolean }
    }
    Enums: {
      app_role: "super_admin" | "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["super_admin", "admin", "user"],
    },
  },
} as const
