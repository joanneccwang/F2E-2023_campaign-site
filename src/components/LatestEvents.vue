<script setup lang="ts">
import { ref } from 'vue';
import { events } from '@/utils/events';
import { menus } from '@/utils/menu';

import Button from '@/components/Global/Button.vue';
import PageTitle from './Layout/PageTitle.vue';

const eventList = ref(events);
const headline = eventList.value[0];
const sectionId = menus.event.id;
</script>

<template>
  <section :id="`${sectionId}`">
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

          <Button postfix="arrow" width="150px">查看更多</Button>
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

    @include pad {
      margin: 0px 40px;
    }
  }
}

#event-block {
  display: flex;
  flex-direction: row;
  column-gap: $pd-sm;
  row-gap: $pd-md;

  margin-top: $spacing-md;
  overflow: hidden;

  @include pad {
    flex-direction: column;
  }
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
</style>
