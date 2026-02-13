import { useState } from "react";
import { format } from "date-fns";
import {
  CalendarIcon,
  Users,
  Clock,
  Send,
  MessageCircle,
  X,
  Ship,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { Yacht } from "@/data/yachts";
import { z } from "zod";
import { createPortal } from "react-dom";

const timeSlots = [
  { value: "08:00", label: "8:00 AM - Morning" },
  { value: "10:00", label: "10:00 AM - Mid Morning" },
  { value: "13:00", label: "1:00 PM - Afternoon" },
  { value: "16:00", label: "4:00 PM - Late Afternoon" },
  { value: "18:00", label: "6:00 PM - Sunset" },
];

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Name is required"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
  date: z.date({ required_error: "Please select a date" }),
  timeSlot: z.string().min(1, "Please select a time slot"),
  passengers: z.number().min(1).max(20),
  notes: z.string().optional(),
});

interface BookingModalProps {
  yacht: Yacht | null;
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal = ({ yacht, isOpen, onClose }: BookingModalProps) => {
  const [date, setDate] = useState<Date>();
  const [timeSlot, setTimeSlot] = useState("");
  const [passengers, setPassengers] = useState(2);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!yacht) return null;

  const maxPassengers = yacht.capacity;

  const resetForm = () => {
    setDate(undefined);
    setTimeSlot("");
    setPassengers(2);
    setName("");
    setPhone("");
    setNotes("");
    setErrors({});
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = bookingSchema.safeParse({
      name,
      phone,
      date,
      timeSlot,
      passengers,
      notes,
    });

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    const formattedDate = date ? format(date, "EEEE, MMMM do, yyyy") : "";
    const selectedTime =
      timeSlots.find((t) => t.value === timeSlot)?.label || timeSlot;

    const message = `🛥️ *Yacht Booking Request*

⛵ *Yacht:* ${yacht.name} (${yacht.type})
👤 *Name:* ${name}
📞 *Phone:* ${phone}
📅 *Date:* ${formattedDate}
⏰ *Time:* ${selectedTime}
👥 *Passengers:* ${passengers}
${notes ? `\n📝 *Notes:* ${notes}` : ""}`;

    // TODO: fast_rewrite_todo: Replace with the actual destination phone number
    const whatsappUrl = `https://wa.me/+971556530484?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
    handleClose();
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Centering Wrapper */}
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg bg-card rounded-2xl shadow-elevated overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b bg-card">
                <div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Ship className="w-4 h-4" />
                    {yacht.type}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground">
                    {yacht.name}
                  </h3>
                </div>
                <button
                  onClick={handleClose}
                  className="w-8 h-8 hover:bg-muted rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                {/* Name */}
                <div>
                  <Label>Your Name</Label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={errors.name ? "border-destructive" : ""}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm">{errors.name}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <Label>Phone Number</Label>
                  <Input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={errors.phone ? "border-destructive" : ""}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="text-destructive text-sm">{errors.phone}</p>
                  )}
                </div>

                {/* Date */}
                <div>
                  <Label>Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start",
                          !date && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(d) => d < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  {errors.date && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.date}
                    </p>
                  )}
                </div>

                {/* Time */}
                <div>
                  <Label>Time Slot</Label>
                  <Select value={timeSlot} onValueChange={setTimeSlot}>
                    <SelectTrigger className={errors.timeSlot ? "border-destructive" : ""}>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot.value} value={slot.value}>
                          {slot.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                   {errors.timeSlot && (
                    <p className="text-destructive text-sm mt-1">{errors.timeSlot}</p>
                  )}
                </div>

                {/* Passengers */}
                <div className="flex items-center gap-4">
                  <Label>Passengers</Label>
                  <Button
                    type="button"
                    onClick={() => setPassengers(Math.max(1, passengers - 1))}
                  >
                    -
                  </Button>
                  <span>{passengers}</span>
                  <Button
                    type="button"
                    onClick={() =>
                      setPassengers(Math.min(maxPassengers, passengers + 1))
                    }
                  >
                    +
                  </Button>
                </div>

                {/* Notes */}
                <div>
                  <Label>Notes</Label>
                  <Textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Any special requests?"
                  />
                </div>

                <Button type="submit" variant="cta" className="w-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Confirm via WhatsApp
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default BookingModal;
