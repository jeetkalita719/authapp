import mongoose, { Schema, models } from "mongoose";
const AutoIncrement = require("mongoose-sequence")(mongoose);

const ordersDataSchema = new mongoose.Schema(
  {
    order: {
      namePlate: {
        required: {
          type: Boolean,
          required: true,
        },
        remarks: String,
      },
      visitingCard: {
        required: {
          type: Boolean,
          required: true,
        },
        remarks: String,
      },
      stamp: {
        required: {
          type: Boolean,
          required: true,
        },
        remarks: String,
      },
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

ordersDataSchema.plugin(AutoIncrement, { inc_field: "orderId" });

const OrdersData = models.OrdersData || mongoose.model("OrdersData", ordersDataSchema);
export default OrdersData;
