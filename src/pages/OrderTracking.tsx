import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";

const TRACKING_EVENTS = [
  {
    id: 1,
    date: "02.01.2022",
    time: "01:15",
    status: "The Shipment has been successfully delivered",
    location: "Xiamen",
    completed: true,
  },
  {
    id: 2,
    date: "04.01.2022",
    time: "12:15",
    status: "The Shipment is ready to be picked",
    location: "Bejing",
    completed: false,
  },
  {
    id: 3,
    date: "06.01.2022",
    time: "03:24",
    status: "The Shipment has been processed in location",
    location: "Bejing",
    completed: false,
  },
  {
    id: 4,
    date: "08.01.2022",
    time: "01:15",
    status: "The Shipment has been processed in location",
    location: "Tianjin",
    completed: false,
  },
  {
    id: 5,
    date: "12.01.2022",
    time: "02:15",
    status: "The Shipment has been processed in location",
    location: "Tianjin",
    completed: true,
  },
  {
    id: 6,
    date: "15.01.2022",
    time: "04:25",
    status: "The Shipment has been processed in location",
    location: "Tianjin",
    completed: false,
  },
];

export default function OrderTracking() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background pb-6">
      <Header title={`Order #${id}`} cartCount={3} />

      <div className="max-w-md mx-auto px-4 py-6">
        <div className="text-center mb-8">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold">
            In Transit
          </span>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[29px] top-8 bottom-8 w-0.5 bg-primary" />

          <div className="space-y-6">
            {TRACKING_EVENTS.map((event, index) => (
              <div key={event.id} className="relative flex gap-4">
                {/* Timeline Dot */}
                <div className="flex-shrink-0 pt-1">
                  <div className="flex flex-col items-center">
                    <span className="text-xs font-medium text-muted-foreground mb-1">
                      {event.date}
                    </span>
                    <div
                      className={`w-4 h-4 rounded-full border-2 ${
                        event.completed
                          ? "bg-primary border-primary"
                          : "bg-background border-primary"
                      }`}
                    />
                    <span className="text-xs font-medium text-muted-foreground mt-1">
                      {event.time}
                    </span>
                  </div>
                </div>

                {/* Event Details */}
                <div className="flex-1 pb-6">
                  <div className="bg-card rounded-xl p-4">
                    <p className="font-medium mb-1">{event.status}</p>
                    <p className="text-sm text-muted-foreground">
                      {event.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
