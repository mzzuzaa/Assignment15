<template>
  <div class="date-time-picker">
    <label for="datetime" class="date-time-label">Select Date & Time:</label>
    <input
      id="datetime"
      type="datetime-local"
      v-model="selectedDateTime"
      class="date-time-input"
      @change="emitDateTime"
      @input="updateDateTime"
    />
    <select v-model="selectedTimezone" class="timezone-select">
      <option value="GMT">GMT</option>
      <option value="EST">EST</option>
      <option value="PST">PST</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'DateTimePicker',
  data() {
    return {
      selectedDateTime: '',
      selectedTimezone: 'GMT',
    };
  },
  methods: {
    emitDateTime() {
      this.$emit('date-time-selected', `${this.selectedDateTime} (${this.selectedTimezone})`);
    },
    updateDateTime(event) {
      this.selectedDateTime = event.target.value;
    },
  },
};
</script>

<style scoped>

.date-time-picker {
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 12px;
}

.date-time-label {
  margin-bottom: 6px;
  display: block;
  font-weight: bold;
}

.date-time-input {
  width: 100%;
  padding: 8px;
  border: 1px solid #be0e0e;
  border-radius: 4px;
  font-size: 14px;
  margin-bottom: 8px;
  background: #73b4e6;
}

.timezone-select {
  padding: 6px;
  border: 1px solid #f30e0e;
  border-radius: 4px;
  font-size: 14px;
}
</style>
