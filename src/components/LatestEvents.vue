<script setup lang="ts">
import { ref } from 'vue';
import { events } from '@/utils/events.ts';

import PageTitle from './Layout/PageTitle.vue';

const eventList = ref(events);
const headline = eventList.value[0];
</script>

<template>
  <section>
    <div id="latest-events">
      <PageTitle tag="LATEST EVENTS" title="最新活動"></PageTitle>
      <div id="event-block">
        <div class="event-main">
          <img class="event-img" :src="headline.coverImg" />
          <div class="event-preview">
            <div class="event-date">{{ headline.date }}</div>
            <h5 class="event-title">{{ headline.title }}</h5>
            <div class="event-content">{{ headline.content }}</div>
          </div>
        </div>
        <div class="event-list">
          <div v-for="event in eventList" class="event">
            <img class="event-img" :src="event.img" />
            <div class="event-preview">
              <div class="event-date">{{ event.date }}</div>
              <h6 class="event-title">{{ event.title }}</h6>
              <div class="event-content">{{ event.content }}</div>
            </div>
          </div>

          <div id="more-button">
            查看更多
            <img src="../assets/icons/arrow_forward.svg" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  @include section-layout();
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  #latest-events {
    @include section-content-layout();
  }
}

#event-block {
  display: flex;
  flex-direction: row;
  gap: $pd-sm;

  margin-top: $spacing-md;
  overflow: hidden;
  .event-main {
    flex: 1;
    overflow: hidden;
    .event-preview {
      margin-top: $pd-sm;
    }
  }

  .event-list {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: $pd-md;

    .event {
      display: flex;
      flex-direction: row;
      gap: $pd-sm;

      .event-img {
        flex: 0 0 200px;
      }
      .event-preview {
        flex: 1;
      }
    }
  }

  .event-main,
  .event-list {
    .event-img {
      width: 100%;
    }
    .event-preview {
      display: flex;
      flex-direction: column;
      gap: $pd-base;
      .event-date {
        font-size: $font-sm;
        color: $gray-400;
      }
      .event-title {
        font-weight: 700;
      }
    }
  }
}

#more-button {
  align-self: flex-start;

  border-radius: 500px;
  border: 1px solid white;
  background-color: $gray-100;
  font-weight: 600;
  padding: $pd-sm $pd-md;

  cursor: pointer;

  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    margin-left: $pd-base;
  }
}
</style>
